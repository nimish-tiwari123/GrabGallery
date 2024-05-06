/* eslint-disable react/prop-types */
import { searchIcon } from "../../../assets/icons";

const Searchbar = (props) => {
  return (
    <>
      <div
        className="search-container border rounded-3 position-relative d-flex"
        style={{ height: "40px", backgroundColor: "#f7f6f6" }}
      >
        <input
          type="text"
          className="border-0 bg-transparent form-control "
          
          placeholder={props.placeholder}
        />
        <button className="border-0 bg-transparent rounded-end-2 pe-2">
          <img src={searchIcon} alt="" />
        </button>
      </div>
    </>
  );
};

export default Searchbar;
