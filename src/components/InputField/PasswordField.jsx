/* eslint-disable react/prop-types */

import { useState } from "react";
import { showpassword, hidepassword } from "../../assets/icons";
const PasswordField = (props) => {
  const { label, name, placeholder, rows, formik, required } = props;
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <label htmlFor="labelName" className="form-label text-primary">
        {label}
      </label>
      <span className="text-danger mb-1 fs-5">{required}</span>
      <div className="position-relative">
        <input
          type={showPassword ? "text" : "password"}
          id={name}
          name={name}
          rows={rows}
          className={"form-control rounded-3 px-4 py-2 bg-sub-secondary"}
          placeholder={placeholder}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[name]}
          style={{
            border: `1.5px solid ${
              formik.touched[name] && formik.errors[name]
                ? "rgb(200, 23, 23)"
                : "#01256033"
            }`,
          }}
        />
        <span
          onClick={handleTogglePassword}
          className="spanIcon position-absolute cursor-pointer top-0 end-0 pe-3 pt-1"
        >
          {showPassword ? (
            <img
              src={showpassword}
              style={{ width: "17px" }}
              className="mt-2"
            />
          ) : (
            <img
              src={hidepassword}
              style={{ width: "17px" }}
              className="mt-2"
            />
          )}
        </span>
      </div>
      {formik.touched[name] && formik.errors[name] ? (
        <div className="text-danger error">{formik.errors[name]}</div>
      ) : (
        <div className="error2"></div>
      )}
    </>
  );
};

export default PasswordField;
