"use client";
import { useAppSelector } from "../../store/store";
const AboutPage = () => {
  const authState = useAppSelector((state) => state.auth.authState);
  return (
    <div>
      <p>AboutPage :{authState.toString()}</p>
    </div>
  );
};
export default AboutPage;
