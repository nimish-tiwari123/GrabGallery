
import { useFormik } from "formik";
import PasswordField from "../../../components/InputField/PasswordField";
import { createPasswordSchema } from "../../../schema/Authentication";
import PrimaryButton from "../../../components/Authentication/Button/PrimaryButton";
const CreatePassword = () => {
  // FORM Schema
  const validationSchema = createPasswordSchema;

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword:""
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
        <div className="mt-2 mb-5">
        <PasswordField
            label="Confirm Password"
            required="*"
            name="confirmPassword"
            placeholder="Enter confirm password"
            formik={formik}
          />
          
        </div>
     
       <PrimaryButton btnText="Save"/>
       
      </form>
      
    </>
  );
};
export default CreatePassword;
