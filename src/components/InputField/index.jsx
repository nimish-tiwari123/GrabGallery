/* eslint-disable react/prop-types */

const InputField = (props) => {
  const {
    label,
    name,
    placeholder,
    rows,
    formik,
    type = "text",
    required,
  } = props;

  return (
    <>
      <label htmlFor="productName" className="form-label text-primary">
        {label}
      </label>
      <span className="text-danger mb-1 fs-5">{required}</span>
      <input
        type={type}
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
      {formik.touched[name] && formik.errors[name] ? (
        <div className="text-danger error">{formik.errors[name]}</div>
      ) : (
        <div className="error2"></div>
      )}
    </>
  );
};

export default InputField;
