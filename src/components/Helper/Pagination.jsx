import React from 'react';
import style from '../../styles/components/Pagination.module.scss';

const Pagination = ({ totalPage, page, setPage}) => {

  function pagination(totalPage, currentPage){
    const arrayTotalPages = Array.from(Array(totalPage), (_, i) => i + 1);
    const itemsPerPage = 7;
    const startIndex = arrayTotalPages[currentPage - 1];
    const endIndex = startIndex + itemsPerPage;
    let currentItems = arrayTotalPages.slice(startIndex - 1, endIndex - 1);
    
    if(startIndex !== 1){
      currentItems = arrayTotalPages.slice(startIndex - 2, endIndex - 2)
      console.log('start ', startIndex - 2)
      console.log('end ', endIndex - 2);
      console.log(currentItems)
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
    <nav className={style.container}>
      {/**<a href="#">&laquo;</a> */}
      {pagination(totalPage, Number(page)).map((item, i) => (
        <a
          key={i} 
          className={
            `${item === Number(page) ? style.active : style.page}`
          } 
          onClick={handleClick}
        >
          {item}
        </a>
      ))}
      {/*<a href="#">&raquo;</a> */}
    </nav>
  )
}

export default Pagination;