/* eslint-disable react/prop-types */
import "./style.css";
const PrimaryButton = ({btntext}) => {
  return (
    <>
     <button className="rounded-pill w-auto px-3 py-1 fw-medium primary-btn">
        {btntext}
          </button>
    </>
  )
}

export default PrimaryButton