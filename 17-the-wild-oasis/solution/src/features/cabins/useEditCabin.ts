import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin as editCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useEditCabin() {
  const queryClient = useQueryClient();
  const { mutate: editCabin, isPending: isEditing } = useMutation({
    mutationFn: ({ cabin, id }) => editCabinApi(cabin, id),
    onSuccess: () => {
      toast.success("Cabin Edited");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editCabin, isEditing };
}
