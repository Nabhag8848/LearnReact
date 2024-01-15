import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();
  const statusValue = searchParams.get("status") || "all";
  const filter =
    statusValue === "all" ? null : { field: "status", value: statusValue };

  const sortValue = searchParams.get("sort") || "start_date-desc";
  const [key, order] = sortValue.split("-");
  const sortBy = { field: key, value: order };

  const page = searchParams.get("page");
  const currPage = !page ? 1 : Number(page);

  const {
    isLoading,
    error,
    data: { data: bookings, count } = {},
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, currPage],
    queryFn: () => getBookings(filter, sortBy, currPage),
  });

  return { isLoading, error, bookings, count };
}
