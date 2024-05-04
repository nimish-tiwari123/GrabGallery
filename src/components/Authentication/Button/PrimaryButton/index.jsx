
const PrimaryButton = (props) => {
  return (
    <>
      <button
        type="submit"
        className="rounded-3 text-light w-100 fw-bold bg-primary btn-border mb-1"
        style={{ padding: "11px 0" }}
      >
        {props.btnText}
      </button>
    </>
  );
};

export default PrimaryButton;
