import { object, string } from "yup";

const LoginSchema = object({
  email: string().email().required(),
  password: string()
    .required()
    .max(8, "Password must less than or equel to 8 characters long")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character",
    ),
});
export default LoginSchema;