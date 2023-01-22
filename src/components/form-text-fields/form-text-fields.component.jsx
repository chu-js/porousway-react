// Text field used in signin / signup form.

import TextField from "@mui/material/TextField";

const FormTextFields = ({ label, name, type, value, changeHandler }) => {
  return (
    <TextField
      required
      fullWidth
      margin="normal"
      label={label}
      id={label}
      name={name}
      type={type}
      value={value}
      onChange={changeHandler}
    />
  );
};

export default FormTextFields;
