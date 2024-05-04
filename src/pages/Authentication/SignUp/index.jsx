import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import PasswordField from "../../../components/InputField/PasswordField";
import InputField from "../../../components/InputField";
import { signUpSchema } from "../../../schema/Authentication";
import PrimaryButton from "../../../components/Authentication/Button/PrimaryButton";
const SignUp = () => {
  const navigate = useNavigate();

  // FORM Schema
  const validationSchema = signUpSchema;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      number: "",
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
            label="Full Name"
            required="*"
            name="name"
            type="text"
            placeholder="Your name"
            formik={formik}
          />
        </div>
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
          <InputField
            label="Mobile Number"
            required="*"
            name="number"
            type="text"
            placeholder="Your number"
            formik={formik}
          />
        </div>
        <div className="mt-2 mb-5">
          <PasswordField
            label="Password"
            required="*"
            name="password"
            placeholder="Enter password"
            formik={formik}
          />
        </div>

        <PrimaryButton btnText="SignUp" />
      </form>
      <div className="text-primary text-center p-2">
        Already have an account?{" "}
        <button
          className="fw-bold border-0 bg-transparent text-underline"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
      </div>
    </>
  );
};
export default SignUp;
