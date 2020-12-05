import * as Yup from "yup";

export const userSchema = Yup.object().shape({
  name: Yup.string()
    .typeError("Must fill out name")
    .required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().min(4).required("Password is required"),
  terms: Yup.boolean().oneOf([true], "You must accept Terms and Conditions"),
});
