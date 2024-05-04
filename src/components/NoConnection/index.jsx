import { noconnection } from "../../assets";
const NoConnection = () => {
  return (
    <>
      <div
        style={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center flex-column"
      >
        <img
          src={noconnection}
          alt=""
          style={{ height: "60%" }}
          className="w-100 p-4"
        />
        <h2 className="fw-bolder text-primary fs-1 mb-3">Connection Lost</h2>
      </div>
    </>
  );
};

export default NoConnection;
