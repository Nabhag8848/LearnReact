import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useSettings } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSetting";

function UpdateSettingsForm() {
  const { settings = {}, isLoading } = useSettings();
  const {
    min_booking_len,
    max_booking_len,
    max_guests_per_booking,
    breakfast_price,
  } = settings;

  const { isUpdating, updateSetting } = useUpdateSetting();

  function handleUpdate(e, key) {
    const { value } = e.target;
    if (!value) return;
    updateSetting({ [key]: value });
  }

  if (isLoading) return <Spinner />;

  return (
    <Form>
      <FormRow label="Minimum nights/booking" error="">
        <Input
          type="number"
          id="min-nights"
          disabled={isUpdating}
          defaultValue={min_booking_len}
          onBlur={(e) => handleUpdate(e, "min_booking_len")}
        />
      </FormRow>

      <FormRow label="Maximum nights/booking" error="">
        <Input
          type="number"
          id="max-nights"
          disabled={isUpdating}
          defaultValue={max_booking_len}
          onBlur={(e) => handleUpdate(e, "max_booking_len")}
        />
      </FormRow>

      <FormRow label="Maximum guests/booking" error="">
        <Input
          type="number"
          id="max-guests"
          disabled={isUpdating}
          defaultValue={max_guests_per_booking}
          onBlur={(e) => handleUpdate(e, "max_guests_per_booking")}
        />
      </FormRow>

      <FormRow label="Breakfast price" error="">
        <Input
          type="number"
          id="breakfast-price"
          disabled={isUpdating}
          defaultValue={breakfast_price}
          onBlur={(e) => handleUpdate(e, "breakfast_price")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
