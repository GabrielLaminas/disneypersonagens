import React from 'react';
import style from '../../styles/components/Pagination.module.scss';
import ArrowLeftIcon from '../../assets/arrow-left.svg?component';
import ArrowRightIcon from '../../assets/arrow-right.svg?component';

const Pagination = ({ info, setUrl, search }) => {
  const [currentPage, setCurrentPage] = React.useState(() => {
    const currentPageStorage = localStorage.getItem('currentPage') 
      ? Number(localStorage.getItem('currentPage')) 
      : localStorage.setItem('currentPage', 1)
    return currentPageStorage;
  });

  function pagination(totalPage, currentPage){
    const arrayTotalPages = Array.from(Array(totalPage), (_, i) => i + 1);
    const itemsPerPage = 7;
    const startIndex = arrayTotalPages[currentPage - 1];
    const endIndex = startIndex + itemsPerPage;
    let currentItems = arrayTotalPages.slice(startIndex - startIndex, endIndex - startIndex);

    if(startIndex !== 1 && startIndex !== 2 && startIndex !== 3){
      currentItems = arrayTotalPages.slice(startIndex - 4, endIndex - 4);
    }

    return currentItems;
  }

  function handleClick(e){
    e.preventDefault();
    const valueTarget = e.target.innerText;
    setCurrentPage(Number(valueTarget));
    setUrl(() => `https://api.disneyapi.dev/character?page=${valueTarget}&pageSize=50&name=${search}`);
    localStorage.setItem('currentPage', Number(valueTarget));
    localStorage.setItem('url', `https://api.disneyapi.dev/character?page=${valueTarget}&pageSize=50&name=${search}`);
    window.scrollTo(0, 80);
  }

  function handlePrevious(e){
    e.preventDefault();
    setCurrentPage((prevPage) => prevPage - 1);
    setUrl(() => info.previousPage + '&name=' + search);
    localStorage.setItem('currentPage', currentPage - 1);
    localStorage.setItem('url', info.previousPage + '&name=' + search);
    window.scrollTo(0, 80);
  }
  
  function handleNext(e){
    e.preventDefault();
    setCurrentPage((prevPage) => prevPage + 1);
    setUrl(() => info.nextPage + '&name=' + search);
    localStorage.setItem('currentPage', currentPage + 1);
    localStorage.setItem('url', info.nextPage + '&name=' + search);
    console.log(info.nextPage + '&name=' + search)
    window.scrollTo(0, 80);
  }

  React.useEffect(() => {
    const getCurrentPage = localStorage.getItem('currentPage');
    setCurrentPage(Number(getCurrentPage));
  }, [localStorage.getItem('currentPage')])

  return (
    <nav className={style.container}>
      <button
        className={`
          ${currentPage !== 1 ? style.buttom : style.buttomDisabled}
        `} 
        onClick={handlePrevious}
      >
        <ArrowLeftIcon />
      </button>

      {pagination(info.totalPages, currentPage).map((item, i) => (
        <a
          key={i} 
          className={
            `${item === currentPage ? style.activePage : style.page}`
          } 
          onClick={handleClick}
        >
          {item}
        </a>
      ))}

      <button
        className={`
          ${currentPage !== info.totalPages ? style.buttom : style.buttomDisabled}
        `} 
        onClick={handleNext}
      >
        <ArrowRightIcon />
      </button>
    </nav>
  )
}

export default Pagination;