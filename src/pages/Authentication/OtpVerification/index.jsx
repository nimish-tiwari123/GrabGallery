import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { otpVerificationSchema } from "../../../schema/Authentication";
import PrimaryButton from "../../../components/Authentication/Button/PrimaryButton";
import InputField from "../../../components/InputField";
import { useForgotPasswordMutation, useOtpVerficationMutation } from "../../../apis/service";
import Loader from "../../../components/Loader";

const OtpVerification = () => {
  const navigate = useNavigate();
  const [otpVerify,{isLoading}] = useOtpVerficationMutation();
  const [resendOtp,{isLoading:isLoadingResend}] = useForgotPasswordMutation();
  const email = localStorage.getItem("email");

  // FORM Schema
  const validationSchema = otpVerificationSchema;

  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {

        const userData = {
          email: email,
          otp: values.otp,
        };
        const { data, error } = await otpVerify(userData);
        if (data) {
          alert(data.message);
          navigate("/createpassword");
        } else {
          alert(error.data.message);
        }
      } catch (err) {
        console.log(err);
      }
    },
  });
  const resend = async()  =>{
    try {
      const userEmail = {
        email: email,
      };
      const { data, error } = await resendOtp(userEmail);
      if (data) {
        alert(data.message);
      } else {
        alert(error.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
    {(isLoading || isLoadingResend )&& <Loader/>}

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
          onClick={() => resend()}
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
