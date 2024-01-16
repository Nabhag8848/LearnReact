import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: checkIn, isPending: isCheckin } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-in",
        is_paid: true,
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} Checked In`);
      queryClient.invalidateQueries({ queryKey: ["checked-in"] });
      navigate("/");
    },
    onError: (err) => toast.error(err.message),
  });

  return { checkIn, isCheckin };
}
