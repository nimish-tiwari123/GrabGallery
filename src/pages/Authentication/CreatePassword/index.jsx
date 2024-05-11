import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import PasswordField from "../../../components/InputField/PasswordField";
import { createPasswordSchema } from "../../../schema/Authentication";
import PrimaryButton from "../../../components/Authentication/Button/PrimaryButton";
import { useCreatePasswordMutation } from "../../../apis/service";
import Loader from "../../../components/Loader";

const CreatePassword = () => {
  const [createPassword,{isLoading}] = useCreatePasswordMutation();
  const navigate = useNavigate();
  // FORM Schema
  const validationSchema = createPasswordSchema;

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const email = localStorage.getItem("email");

        const userData = {
          email: email,
          password: values.password,
        };
        const response = await createPassword(userData);
        alert(response.data.message);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    },
  });
  return (
    <>
    {isLoading && <Loader/>}

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
        <div className="mt-2 mb-5">
          <PasswordField
            label="Confirm Password"
            required="*"
            name="confirmPassword"
            placeholder="Enter confirm password"
            formik={formik}
          />
        </div>

        <PrimaryButton btnText="Save" />
      </form>
    </>
  );
};
export default CreatePassword;
