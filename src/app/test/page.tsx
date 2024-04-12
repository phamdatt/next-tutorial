"use client";
import { useFormState } from "react-dom";
import FormMessageError from "@/components/form/form-message-error";
import { validateExampleAction } from "@/app/actions";

const initialState = {
  message: "",
};

function UserProfile() {
  const [state, formAction] = useFormState(validateExampleAction, initialState);
  return (
    <form action={formAction}>
      <input type="text" name="email" />
      <FormMessageError error={state?.message} />
      <button type="submit">Update User Name</button>
    </form>
  );
}
export default UserProfile;
