
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import PasswordField from "../../../components/InputField/PasswordField";
import { forgotPasswordSchema } from "../../../schema/Authentication";
import PrimaryButton from "../../../components/Authentication/Button/PrimaryButton";
const ForgotPassword = () => {
    const navigate = useNavigate();
  // FORM Schema
  const validationSchema = forgotPasswordSchema;

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <>
    
      <form className="text-start fw-500 pt-3" onSubmit={formik.handleSubmit}>
        <div className="mt-2">
        <PasswordField
            label="Password"
            required="*"
            name="password"
            placeholder="Enter password"
            formik={formik}
          />
          
        </div>
       <div className="text-secondary my-4 text-center cursor-pointer" onClick={()=>{navigate("/login")}}>
        Back to login
       </div>
       <PrimaryButton btnText="Send Otp"/>
       
      </form>
      <div className="text-primary text-center p-2">
      Don’t have an account? <button className="fw-bold border-0 bg-transparent text-underline" onClick={()=>{navigate("/signup")}}>Sign Up</button>
      </div>
    </>
  );
};
export default ForgotPassword;
