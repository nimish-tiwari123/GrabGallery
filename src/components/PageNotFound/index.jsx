import { useNavigate } from "react-router-dom";
import { pagenotfound } from "../../assets/index";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center flex-column"
      >
        <img
          src={pagenotfound}
          alt=""
          style={{ height: "65%" }}
          className="w-100 p-4"
        />
        <p
          className="fw-bolder text-primary cursor-pointer fs-5 text-underline"
          onClick={() => {
            navigate("/");
          }}
        >
          Back to Home
        </p>
      </div>
    </>
  );
};

export default PageNotFound;
