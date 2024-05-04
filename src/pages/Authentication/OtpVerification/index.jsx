import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { otpVerificationSchema } from "../../../schema/Authentication";
import PrimaryButton from "../../../components/Authentication/Button/PrimaryButton";
import InputField from "../../../components/InputField";
const OtpVerification = () => {
  const navigate = useNavigate();
  // FORM Schema
  const validationSchema = otpVerificationSchema;

  const formik = useFormik({
    initialValues: {
      otp: "",
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
            label="Enter Verification Code"
            required="*"
            name="otp"
            type="text"
            placeholder="000000"
            formik={formik}
          />
        </div>
        <div
          className="text-secondary my-4 text-center cursor-pointer"
          onClick={() => {
            navigate("/login");
          }}
        >
         Resend
        </div>
        <PrimaryButton btnText="Submit" />
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
export default OtpVerification;
