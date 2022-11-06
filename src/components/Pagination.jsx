import React, { useEffect, useState } from "react";

export default function Pagination(props) {
  const { data, RenderComponent, pageLimit, dataLimit } = props;

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0" });
  }, [currentPage]);

  function getPaginatedData() {
    const start = (currentPage - 1) * dataLimit;
    const endIndex = start + dataLimit;
    return data.slice(start, endIndex);
  }

  function goToPreviousPage() {
    setCurrentPage((prevPage) => prevPage - 1);
  }
  function goToNextPage() {
    setCurrentPage((prevPage) => prevPage + 1);
  }
  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  function getPaginatedGroup() {
    let start = 0;
    if (currentPage > 5) {
      start = 5;
    }
    return new Array(pageLimit).fill().map((any, index) => {
      return start + index + 1;
    });
  }

  return (
    <div className="pagination">
      <div className="users-left-right">
        <div className="left-side"></div>
        <div className="all-users">
          {getPaginatedData().map((data, index) => {
             let userId = ((currentPage - 1) * 10) + index

            return <RenderComponent data={data} id={userId} key={index} />;
          })}
        </div>
        <div className="right-side"></div>
      </div>

      <div className="pagination-buttons">
        <button
          onClick={goToPreviousPage}
          className={`prev ${currentPage == 1 ? "disabled" : " "}`}
        >
          prev
        </button>
        {getPaginatedGroup().map((item, index) => {
          return (
            <button
              key={index}
              onClick={changePage}
              className={`paginationItem ${
                item == currentPage ? "active" : " "
              }`}
            >
              <span>{item}</span>
            </button>
          );
        })}
        <button
          onClick={goToNextPage}
          className={`next ${currentPage == 10 ? "disabled" : " "}`}
        >
          next
        </button>
      </div>
    </div>
  );
}
