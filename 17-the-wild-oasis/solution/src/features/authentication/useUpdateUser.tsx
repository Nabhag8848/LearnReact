import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser as updateCurrentUserApi } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isPending: isUpdatingUser } = useMutation({
    mutationFn: ({
      password,
      avatar,
      full_name,
    }: {
      password?: string;
      avatar?: string | null;
      full_name?: string;
    }) => updateCurrentUserApi({ password, avatar, full_name }),
    onSuccess: ({ user }) => {
      toast.success("Info updated");
      queryClient.setQueryData(["user"], user);
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdatingUser };
}
