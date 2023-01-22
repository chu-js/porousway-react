// Signup form component to be used in signup page.

import { useState } from "react";

import { useDispatch } from "react-redux";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import { signUpStart } from "../../store/user/user.action";

import { Button, Box } from "@mui/material";
import FormTextFields from "../form-text-fields/form-text-fields.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    //   Include all password rules here & return in red fields, not as alerts.
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    } else if (password.length < 6) {
      alert("Password is too short.");
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      //   Include all password rules here & return in red fields, not as alerts.
      switch (error.code) {
        case "auth/email-already-in-use":
          alert("Email already registered");
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
            label="Name"
            name="displayName"
            value={displayName}
            changeHandler={handleChange}
          />
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
          <FormTextFields
            label="Confirm password"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            changeHandler={handleChange}
          />
          <Button variant="outlined" type="submit">
            Sign up
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default SignUpForm;
