import { nodata } from "../../assets/index";
const NoDataFound = () => {
  return (
    <>
      <div
        style={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center flex-column"
      >
        <img
          src={nodata}
          alt=""
          style={{ height: "60%" }}
          className="w-100 p-4"
        />
        <h2 className="fw-bolder text-primary fs-1 mb-3">No Data Found</h2>
      </div>
    </>
  );
};

export default NoDataFound;
