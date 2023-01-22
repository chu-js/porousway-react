// Signup page

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { Link } from "@mui/material";

const SignUp = () => {
  return (
    <div>
      <h1>Create your account.</h1>
      <h4>An account is all you need to get or reschedule your bookings.</h4>
      <h4>
        Already have an account? <Link href="/signin">Find it here.</Link>
      </h4>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
