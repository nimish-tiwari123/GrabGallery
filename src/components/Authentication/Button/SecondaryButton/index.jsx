/* eslint-disable react/prop-types */

const SecondaryButton = (props) => {
  return (
    <>
      <button
        type="submit"
        className="rounded-3 text-dark btn-border w-100 fw-bold bg-transparent mt-1"
        style={{ padding: "11px 0" }}
        onClick={props.onClick}
      >
        {props.btnText}
      </button>
    </>
  );
};

export default SecondaryButton;
