import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { formState, register, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { signUp, isSignUp } = useSignup();

  function onSubmit({
    full_name,
    password,
    email,
  }: {
    full_name?: string;
    password?: string;
    email?: string;
  }) {
    signUp(
      { full_name, password, email },
      {
        onSettled: () => {
          reset();
        },
      }
    );
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.full_name?.message as string}>
        <Input
          type="text"
          id="full_name"
          {...register("full_name", { required: "This field is required" })}
          disabled={isSignUp}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message as string}>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Enter Valid Email",
            },
          })}
          disabled={isSignUp}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message as string}
      >
        <Input
          type="password"
          id="password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password must be of atleast 8 characters",
            },
          })}
          disabled={isSignUp}
        />
      </FormRow>

      <FormRow
        label="Repeat password"
        error={errors?.passwordConfirm?.message as string}
      >
        <Input
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Password must match",
          })}
          disabled={isSignUp}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          disabled={isSignUp}
          onClick={reset}
        >
          Cancel
        </Button>
        <Button disabled={isSignUp}>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
