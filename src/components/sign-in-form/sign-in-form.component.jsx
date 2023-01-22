// Signin form component to be used in signin page.

import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormTextFields from "../form-text-fields/form-text-fields.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));

      resetFormFields();
    } catch (error) {
      //   Include all password rules here & return in red fields, not as alerts.
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth="328px"
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
        >
          <FormTextFields
            label="Email"
            name="email"
            type="email"
            value={email}
            changeHandler={handleChange}
          />
          <FormTextFields
            label="Password"
            name="password"
            type="password"
            value={password}
            changeHandler={handleChange}
          />

          <Button variant="outlined" type="submit">
            Sign in
          </Button>
          <Button variant="contained" type="button" onClick={signInWithGoogle}>
            Google sign in
          </Button>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember me"
          />
        </Box>
      </form>
    </div>
  );
};

export default SignInForm;
