import React from 'react';
import style from '../../styles/components/Pagination.module.scss';

const Pagination = ({ page, setPage}) => {
  const pages = [1, 2, 3, 4, 5];

  return (
    <div className={style.container}>
      {pages.map((numberPage, id) => (
        <a 
          key={id}
        >
          {numberPage}
        </a>
      ))}
    </div>
  )
}

export default Pagination;