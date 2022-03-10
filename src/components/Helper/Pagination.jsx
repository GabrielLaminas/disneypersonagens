import React from 'react';
import style from '../../styles/components/Pagination.module.scss';

const Pagination = ({ totalPage, page, setPage}) => {
  const ArrayTotalPages = Array.from(Array(totalPage), (_, i) => i);
  const itemsPerPage = 5;

  function pagination(currentPage){
    const startIndex = ArrayTotalPages[Number(currentPage)];
    const endIndex = startIndex + itemsPerPage;
    let currentItems = ArrayTotalPages.slice(startIndex, endIndex);
  
    if(startIndex !== 1){
      currentItems = ArrayTotalPages.slice(startIndex-1, endIndex)
    }

    return currentItems;
  }

  function handleClick(e){
    e.preventDefault();
    const valueTarget = e.target.innerText;
    setPage(valueTarget);
    window.localStorage.setItem('page', valueTarget);
  }

  return (
    <div className={style.container}>
      {pagination(page).map((item, i) => (
        <a 
          key={i} 
          className={style.page} 
          onClick={handleClick}
        >
          {item}
        </a>
      ))}
    </div>
  )
}

export default Pagination;