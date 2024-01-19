import { createBookings, deleteBookings } from "./Uploader";

export async function ScheduleTask() {
  await deleteBookings();
  await createBookings();
}
