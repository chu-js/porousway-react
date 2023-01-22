// Signin page

import { Link } from "@mui/material";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const SignIn = () => {
  return (
    <div>
      <h2>Sign in for faster checkout.</h2>
      <h4>Sign in to Porousway</h4>
      <SignInForm />
      <Link>Forgot username or password?</Link>
      <Link href="/signup">Don't have an account? Create yours now.</Link>
    </div>
  );
};

export default SignIn;
