/* eslint-disable react/prop-types */
// TextAreaField.jsx

const TextAreaField = ({ label,required, name, placeholder, formik }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <span className="text-danger mb-1 fs-5">{required}</span>
      <textarea
        className="form-control bg-sub-secondary"
        id={name}
        name={name}
        placeholder={placeholder}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched[name] && formik.errors[name] ? (
        <div className="text-danger">{formik.errors[name]}</div>
      ) : null}
    </div>
  );
};

export default TextAreaField;
