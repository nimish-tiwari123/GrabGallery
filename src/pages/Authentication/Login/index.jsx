
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import InputField from "../../../components/InputField";
import PasswordField from "../../../components/InputField/PasswordField";
import { loginSchema } from "../../../schema/Authentication";
import SecondaryButton from "../../../components/Authentication/Button/SecondaryButton";
import PrimaryButton from "../../../components/Authentication/Button/PrimaryButton";

const Login = () => {
  const navigate = useNavigate();
  // FORM Schema
  const validationSchema = loginSchema;

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <form className="text-start fw-500" onSubmit={formik.handleSubmit}>
        <div className="mt-2">
          <InputField
            label="Email"
            required="*"
            name="email"
            type="email"
            placeholder="Your email"
            formik={formik}
          />
        </div>
        <div className="mt-2">
          <PasswordField
            label="Password"
            required="*"
            name="password"
            placeholder="Enter password"
            formik={formik}
          />
          
        </div>
        <p className="text-primary text-end fw-bold my-4 cursor-pointer" onClick={()=>{navigate("/forgotpassword")}}>Forgot password</p>
       <PrimaryButton btnText="Login"/>
       
      </form>
      <div
        className="bg-secondary-subtle my-4 position-relative d-flex justify-content-center"
        style={{ height: "1.5px" }}
      >
        <span
          className="bg-white text-secondary position-absolute px-2"
          style={{ top: "-12px" }}
        >
          OR
        </span>
      </div>
<SecondaryButton btnText="Sign Up" onClick={()=>{navigate("/signup")}}/>
    </>
  );
};
export default Login;
