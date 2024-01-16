import styled from "styled-components";
import { format, isToday } from "date-fns";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";

import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";
import Menus from "../../ui/Menus";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useCheckOut } from "../check-in-out/useCheckout";
import { useDeleteBooking } from "./useDeleteBooking";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

function BookingRow({
  booking: {
    id: bookingId,
    created_at,
    start_date,
    end_date,
    num_nights,
    num_guests,
    total_price,
    status,
    guests: { full_name: guest_name, email },
    cabins: { name: cabin_name },
  },
}) {
  const navigate = useNavigate();
  const { isCheckout, checkOut } = useCheckOut();
  const { isBookingDeleting, deleteBooking } = useDeleteBooking();
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <Menus>
      <Table.Row>
        <Modal>
          <Cabin>{cabin_name}</Cabin>

          <Stacked>
            <span>{guest_name}</span>
            <span>{email}</span>
          </Stacked>

          <Stacked>
            <span>
              {isToday(new Date(start_date))
                ? "Today"
                : formatDistanceFromNow(start_date)}
              &rarr; {num_nights} night stay
            </span>
            <span>
              {format(new Date(start_date), "MMM dd yyyy")} &mdash;
              {format(new Date(end_date), "MMM dd yyyy")}
            </span>
          </Stacked>

          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

          <Amount>{formatCurrency(total_price)}</Amount>
          <Menus.Menu>
            <Menus.Toggle id={bookingId} />
            <Menus.List id={bookingId}>
              <Menus.Button
                icon={<HiEye />}
                onClick={() => navigate(`/bookings/${bookingId}`)}
              >
                See Details
              </Menus.Button>
              {status === "unconfirmed" && (
                <Menus.Button
                  icon={<HiArrowDownOnSquare />}
                  onClick={() => navigate(`/checkin/${bookingId}`)}
                >
                  Check in
                </Menus.Button>
              )}
              {status === "checked-in" && (
                <Menus.Button
                  icon={<HiArrowUpOnSquare />}
                  onClick={() => {
                    checkOut(bookingId);
                    navigate("/");
                  }}
                  disabled={isCheckout}
                >
                  Check out
                </Menus.Button>
              )}
              <Modal.Open open="delete">
                <Menus.Button icon={<HiTrash />}>Delete Booking</Menus.Button>
              </Modal.Open>
            </Menus.List>
          </Menus.Menu>
          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="Delete Booking"
              disabled={isBookingDeleting}
              onConfirm={() => deleteBooking(bookingId)}
            />
          </Modal.Window>
        </Modal>
      </Table.Row>
    </Menus>
  );
}

export default BookingRow;
