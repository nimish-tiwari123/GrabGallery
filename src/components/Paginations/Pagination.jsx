/* eslint-disable react/prop-types */
import "./Pagination.css"; 
import { backTick, nextTick} from "../../assets/icons";
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button
        onClick={handlePrevClick}
        disabled={currentPage === 1}
        className="pagination-button rounded-circle border-0"
      >
        <img src={backTick} alt="" className="w-100" />
      </button>
      <div className="pagination-container rounded-pill">
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`pagination-button rounded-circle border-0 ${
              currentPage === number ? "active" : ""
            }`}
            onClick={() => onPageChange(number)}
          >
            {number}
          </button>
        ))}
      </div>
      <button
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
        className="pagination-button rounded-circle border-0"
      >
        <img src={nextTick} alt="" className="w-100" />
      </button>
    </div>
  );
};

export default Pagination;
