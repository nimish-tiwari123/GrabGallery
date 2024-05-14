/* eslint-disable react/prop-types */
import Select from 'react-select';

const MultiSelect = (props) => {
  const {
    label,
    name,
    options,
    formik,
    required,
    onChange,
  } = props;

  const handleChange = (selectedOptions) => {
    formik.setFieldValue(name, selectedOptions.map(option => option.value));
    // If onChange is provided, call it with selected options
    if (onChange) onChange(selectedOptions);
  };

  return (
    <div>
      <label htmlFor={name} className="form-label text-primary">
        {label}
      </label>
      <span className="text-danger mb-1 fs-5">{required}</span>
      <Select
        id={name}
        name={name}
        className="basic-multi-select"
        classNamePrefix="select"
        options={options}
        onChange={handleChange}
        onBlur={formik.handleBlur}
        value={options.filter(option => formik.values[name].includes(option.value))}
        isMulti
      />
      {formik.touched[name] && formik.errors[name] ? (
        <div className="text-danger error">{formik.errors[name]}</div>
      ) : (
        <div className="error2"></div>
      )}
    </div>
  );
};

export default MultiSelect;
