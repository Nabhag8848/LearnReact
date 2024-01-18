import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signUp, isPending: isSignUp } = useMutation({
    mutationFn: ({
      email,
      password,
      full_name,
    }: {
      full_name?: string;
      password?: string;
      email?: string;
    }) => signUpApi({ email, password, full_name }),
    onSuccess: () => {
      toast.success("User Created Succesfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { signUp, isSignUp };
}
