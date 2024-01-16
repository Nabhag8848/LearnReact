import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
  const queryClient = useQueryClient();
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

  const lastPage = Math.ceil(Number(count) / PAGE_SIZE);

  if (currPage < lastPage)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, currPage + 1],
      queryFn: () => getBookings(filter, sortBy, currPage + 1),
    });

  if (currPage > 1) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, currPage - 1],
      queryFn: () => getBookings(filter, sortBy, currPage - 1),
    });
  }
  
  return { isLoading, error, bookings, count };
}
