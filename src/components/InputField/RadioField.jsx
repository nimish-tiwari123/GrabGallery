/* eslint-disable react/prop-types */
// RadioField.jsx

const RadioField = ({ label,required, name, options, formik }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <span className="text-danger mb-3">{required}</span>

      <div>
        {options.map((option, index) => (
          <div key={index} className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id={`${name}-${index}`}
              name={name}
              value={option}
              checked={formik.values[name] === option}
              onChange={formik.handleChange}
            />
            <label
              className="form-check-label"
              htmlFor={`${name}-${index}`}
            >
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioField;
