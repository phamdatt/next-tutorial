import { Button } from "primereact/button";
import { markAsSeen } from "@/app/actions";
const ButtonChangeLanguage = () => {
  return (
    <form action={markAsSeen}>
      <Button
        label="Change"
        type="submit"
        className="rounded-md px-4 py-2 bg-blue text-gray-light hover:bg-blue-dark duration-300 m-4"
      />
    </form>
  );
};
export default ButtonChangeLanguage;
