import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email().required("Please Enter email"),
  password: Yup.string()
    .required("Please Enter Password")
    .min(8, "Password must be at least 8 characters")
    .matches(/^(?=.*[A-Za-z])/, "Password must contain at least one letter")
    .matches(/^(?=.*\d)/, "Password must contain at least one number")
    .matches(
      /^(?=.*[@$!%*#?&])/,
      "Password must contain at least one special character"
    )
    .matches(
      /^[A-Za-z\d@$!%*#?&]+$/,
      "Password must not contain invalid characters"
    ),
});


export const signUpSchema = Yup.object().shape({
  email: Yup.string().email().required("Please Enter email"),
  password: Yup.string()
    .required("Please Enter Password")
    .min(8, "Password must be at least 8 characters")
    .matches(/^(?=.*[A-Za-z])/, "Password must contain at least one letter")
    .matches(/^(?=.*\d)/, "Password must contain at least one number")
    .matches(
      /^(?=.*[@$!%*#?&])/,
      "Password must contain at least one special character"
    )
    .matches(
      /^[A-Za-z\d@$!%*#?&]+$/,
      "Password must not contain invalid characters"
    ),
  number: Yup.string().matches(/^\d+$/, "Number must contain only digits").required("Please Enter Number"),
  name: Yup.string().required("Please Enter Name")
});


export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email().required("Please Enter email"),
 
});