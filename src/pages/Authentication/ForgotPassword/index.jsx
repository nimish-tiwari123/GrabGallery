import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { forgotPasswordSchema } from "../../../schema/Authentication";
import PrimaryButton from "../../../components/Authentication/Button/PrimaryButton";
import InputField from "../../../components/InputField";
import { useForgotPasswordMutation } from "../../../apis/service";
import Loader from "../../../components/Loader";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [forgotPassword,{isLoading}] = useForgotPasswordMutation();
  // FORM Schema
  const validationSchema = forgotPasswordSchema;

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const userEmail = {
          email: values.email,
        };
        const { data, error } = await forgotPassword(userEmail);
        if (data) {
          localStorage.setItem("email", values.email);
          alert(data.message);
          navigate("/otp");
        } else {
          alert(error.data.message);
        }
      } catch (err) {
        console.log(err);
      }
    },
  });
  return (
    <>
    {isLoading && <Loader/>}

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
        <div
          className="text-secondary my-4 text-center cursor-pointer"
          onClick={() => {
            navigate("/login");
          }}
        >
          Back to login
        </div>
        <PrimaryButton btnText="Send Otp" />
      </form>
      <div className="text-primary text-center p-2">
        Don’t have an account?{" "}
        <button
          className="fw-bold border-0 bg-transparent text-underline"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign Up
        </button>
      </div>
    </>
  );
};
export default ForgotPassword;
