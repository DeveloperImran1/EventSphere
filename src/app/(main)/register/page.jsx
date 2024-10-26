import RegisterPageComponent from "@/components/register/RegisterPageComponent";

export const metadata = {
  title: "Register",
  description: "Register page,Smart Event Management and Booking Platform",
  keywords: ["register","online", "ticket", "selling", "system", "event", "management"]
};

const SignUp = () => {

  return (
    <div className="">
      <RegisterPageComponent />
    </div>
  );
};

export default SignUp;
