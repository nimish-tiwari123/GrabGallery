/* eslint-disable react/prop-types */

const SelectField = (props) => {
    const {
      label,
      name,
      options,
      formik,
      required,
      onChange, // Added onChange prop
    } = props;
  
    return (
      <>
        <label htmlFor={name} className="form-label text-primary">
          {label}
        </label>
        <span className="text-danger mb-1 fs-5">{required}</span> {/* Corrected to show required label */}
        <select
          id={name}
          name={name}
          className="form-select rounded-3 px-4 py-2 bg-sub-secondary"
          onChange={(e) => {
            formik.handleChange(e); // Handle formik change
            if (onChange) onChange(e); // Call onChange if provided
          }}
          onBlur={formik.handleBlur}
          value={formik.values[name]}
          style={{
            border: `1.5px solid ${
              formik.touched[name] && formik.errors[name]
                ? "rgb(200, 23, 23)"
                : "#01256033"
            }`,
          }}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
        {formik.touched[name] && formik.errors[name] ? (
          <div className="text-danger error">{formik.errors[name]}</div>
        ) : (
          <div className="error2"></div>
        )}
      </>
    );
  };
  
  export default SelectField;
  