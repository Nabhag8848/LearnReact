import styled from "styled-components";
import BookingDataBox from "../bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/useBooking";
import Spinner from "../../ui/Spinner";
import Checkbox from "../../ui/Checkbox";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import { useCheckin } from "./useCheckin";
import { useSettings } from "../settings/useSettings";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const moveBack = useMoveBack();
  const { booking, isLoading } = useBooking();
  const [confirmPaid, setConfirmPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);
  const { isCheckin, checkIn } = useCheckin();
  const { isLoading: isSettingLoading, settings } = useSettings();

  useEffect(
    function () {
      setConfirmPaid(booking ? booking.is_paid : false);
    },
    [booking]
  );

  if (isLoading || isSettingLoading) return <Spinner />;

  const {
    id: bookingId,
    guests,
    total_price,
    num_guests,
    has_breakfast,
    num_nights,
  } = booking;

  const extraPrice = settings.breakfast_price * num_guests * num_nights;

  function handleCheckin() {
    if (!confirmPaid) return;
    if (addBreakfast) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      checkIn({
        bookingId,
        breakfast: {
          has_breakfast: true,
          extra_price: extraPrice,
          total_price: total_price + extraPrice,
        },
      });
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      checkIn({ bookingId, breakfast: {} });
    }
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
      {!has_breakfast && (
        <Box>
          <Checkbox
            checked={addBreakfast}
            onChange={() => {
              setAddBreakfast((add) => !add);
              setConfirmPaid(false);
            }}
            disabled={isSettingLoading}
            id={crypto.randomUUID()}
          >
            Want to add breakfast of {formatCurrency(extraPrice)} ?
          </Checkbox>
        </Box>
      )}
      <Box>
        <Checkbox
          checked={confirmPaid}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          disabled={confirmPaid || isCheckin}
          id={bookingId}
        >
          I Confirm that {guests.full_name} has paid total amount of{" "}
          {!addBreakfast
            ? formatCurrency(total_price)
            : `${formatCurrency(total_price + extraPrice)} (${formatCurrency(
                total_price
              )} +  ${formatCurrency(extraPrice)})`}
        </Checkbox>
      </Box>
      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!confirmPaid || isCheckin}>
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
