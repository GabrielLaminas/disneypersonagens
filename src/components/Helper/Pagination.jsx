import React from 'react';
import style from '../../styles/components/Pagination.module.scss';

const Pagination = ({ totalPage, page, setPage}) => {
  const pages = [1, 2, 3, 4, 5, 6];

  function handleClick({ target }){
    const valueTarget = target.innerText;
    setPage(valueTarget);
    window.localStorage.setItem('page', valueTarget);
  }

  return (
    <div className={style.container}>
      {pages.map((numberPage, id) => (
        <a
          className={style.page} 
          key={id}
          onClick={handleClick}
        >
          {numberPage}
        </a>
      ))}
    </div>
  )
}

export default Pagination;