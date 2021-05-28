import React, { useState } from "react";
import { number, func } from "prop-types";

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";

const PageComponent = ({
  totalPages,
  totalRecords,
  pageLimit,
  pageNeighbours,
  setPage,
  currentPage,
}) => {
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages,
    pageLimit,
    totalRecords,
  });

  const gotoPage = (page) => {
    setPagination({ ...pagination, currentPage: page });
    setPage(page);
  };
  const range = (from, to, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
      range.push(i);
      i += step;
    }

    return range;
  };
  const fetchPageNumbers = () => {
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
      let pages = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        // handle: (1) {2 3} [4] {5 6} > (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        // handle: (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };
  const handleClick = (page) => (evt) => {
    evt.preventDefault();
    gotoPage(page);
  };

  const handleMoveLeft = (evt) => {
    evt.preventDefault();
    gotoPage(pagination.currentPage - pageNeighbours * 2 - 1);
  };

  const handleMoveRight = (evt) => {
    evt.preventDefault();
    gotoPage(pagination.currentPage + pageNeighbours * 2 + 1);
  };

  if (!totalRecords || totalPages === 1) return null;
  const pages = fetchPageNumbers();
  return (
    <>
      <nav aria-label="Countries Pagination">
        <ul className="pagination">
          {pages.map((page) => {
            if (page === LEFT_PAGE)
              return (
                <li key={page} className="page-item">
                  <button
                    type="button"
                    className="page-link"
                    href="#"
                    aria-label="Previous"
                    onClick={handleMoveLeft}
                  >
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </button>
                </li>
              );

            if (page === RIGHT_PAGE)
              return (
                <li key={page} className="page-item">
                  <button
                    type="button"
                    className="page-link"
                    href="#"
                    aria-label="Next"
                    onClick={handleMoveRight}
                  >
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </button>
                </li>
              );

            return (
              <li
                key={page}
                className={`page-item${currentPage === page ? " active" : ""}`}
              >
                <button
                  type="button"
                  className="page-link"
                  href="#"
                  onClick={handleClick(page)}
                >
                  {page}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

PageComponent.propTypes = {
  totalPages: number.isRequired,
  totalRecords: number.isRequired,
  pageLimit: number.isRequired,
  pageNeighbours: number.isRequired,
  setPage: func.isRequired,
  currentPage: number.isRequired,
};

export default PageComponent;
