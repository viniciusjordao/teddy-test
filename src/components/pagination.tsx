const Pagination = ({
  pageNumbers,
  setCurrentPage,
  currentPage,
}) => {

const pages = [];

  for (let i = 1; i <= pageNumbers; i++) {
    pages.push(i);
  }

  const paginate = (pageNumber, e) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <nav>
      <ul className="pagination">
        {pages.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            <a
              onClick={(e) => paginate(number, e)}
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination
