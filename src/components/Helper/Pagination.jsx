import React from 'react';

const Pagination = (props) => {
  const pages = [1, 2, 3, 4, 5];

  return (
    <div>
      <p>Total: {props.totalPages}</p>
      <p>Next: {props.nextPage}</p>
      <p>Previous: {props.previousPage}</p>
      <p>Page: {props.page}</p>

      <div>
        {pages.map((page, id) => (
          <a key={id}>
            {page}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Pagination;