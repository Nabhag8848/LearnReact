import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import store from "../../store";
import { clearCart, getTotalCartPrice } from "../cart/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import { fetchAddress } from "../user/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

export default function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation();
  const navigate = useNavigate();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((store) => store.user);
  const cart = useSelector((store) => store.cart.cart);
  const basePrice = getTotalCartPrice(cart);
  const priorityPrice = withPriority ? basePrice * 0.2 : 0;
  const totalPrice = priorityPrice + basePrice;
  const dispatch = useDispatch();
  const isLoadingAddress = addressStatus === "loading";

  useEffect(
    function () {
      async function createFinalOrder(order) {
        const newOrder = await createOrder(order);
        navigate(`/order/${newOrder.id}`);
        store.dispatch(clearCart());
      }

      if (formErrors && Object.keys(formErrors).length > 1) {
        createFinalOrder(formErrors);
        return;
      }

      if (!username) {
        navigate("/");
      }
    },
    [username, navigate, formErrors],
  );

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">
        Ready to order? Let&#39;s go!
      </h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            type="text"
            name="customer"
            required
            className="input grow text-base"
            defaultValue={username}
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input
              type="tel"
              name="phone"
              required
              className="input w-full text-base"
            />
            {formErrors && Object.keys(formErrors).length === 1 && (
              <p className="mt-2 rounded-md bg-red-100 px-2 py-1 text-xs font-semibold text-red-700">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              className="input w-full text-base"
              disabled={isLoadingAddress}
              defaultValue={address}
            />
          </div>

          {!position.latitude && !position.longitude && (
            <Button
              type="small"
              disabled={isLoadingAddress}
              onClick={(e) => {
                e.preventDefault();
                dispatch(fetchAddress());
              }}
            >
              Get Position
            </Button>
          )}
        </div>
        {addressStatus === "error" && (
          <p className="mb-2 ml-[167px] rounded-md bg-red-100 px-5 py-0.5 text-xs font-semibold text-red-700">
            {errorAddress}
          </p>
        )}
        <div className="mb-12 flex items-center gap-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
            className="h-6 w-6 accent-green-700 focus:outline-none focus:ring focus:ring-zinc-300 "
          />
          <label htmlFor="priority" className="font-medium">
            Want to give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={
              position.longitude &&
              position.latitude &&
              `${position.latitude}, ${position.longitude}}`
            }
          />
          <Button type="primary" disabled={isSubmitting || isLoadingAddress}>
            {`Order now from ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    priority: data.priority === "true",
    cart: JSON.parse(data.cart),
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = "Please give correct Phone Number";

  if (Object.keys(errors).length) return errors;
  return order;
}
