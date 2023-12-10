import React from 'react';
import style from '../../styles/components/Pagination.module.scss';

const Pagination = ({ totalPage, page, setPage}) => {

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
    setPage(valueTarget);
    window.localStorage.setItem('page', valueTarget);
  }

  function handlePrevious(e){
    e.preventDefault();

    if(Number(page) > 1){
      setPage(Number(page) - 1);
      window.localStorage.setItem('page', Number(page) - 1);
    }
  }
  
  function handleNext(e){
    e.preventDefault();
    
    if(Number(page) < 149){
      setPage(Number(page) + 1);
      window.localStorage.setItem('page', Number(page) + 1);
    }
  }

  return (
    <nav className={style.container}>
      <button
        className={`
          ${Number(page) !== 1 ? style.buttom : style.buttomDisabled}
        `} 
        onClick={handlePrevious}
      >
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKZJREFUSEvt1L0RQEAQhuFd0cUKoSUqQSWUhAoogPgyBoG/Gd/eLRkp8z7sgunjgz/u0w/ACXuNyIRxSTR1dmwLJDgDW5ySLTzlCHECzvFVqOzYpE9PIQZ84gssAnzjIkATh4A2LgCijIjzfYn4rbkuHO7AhDoEAssdaRARoEHEgC/iBNwQ5tQOdfXKl3yMrDvhoEdx+JqiP6XkvPOIJNHjNT8AJzYDOshNGW8n1m4AAAAASUVORK5CYII="/>
      </button>

      {pagination(totalPage, Number(page)).map((item, i) => (
        <a
          key={i} 
          className={
            `${item === Number(page) ? style.activePage : style.page}`
          } 
          onClick={handleClick}
        >
          {item}
        </a>
      ))}

      <button
        className={`
          ${Number(page) !== 149 ? style.buttom : style.buttomDisabled}
        `} 
        onClick={handleNext}
      >
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALVJREFUSEtjZKAxYKSx+QyjFhAMYaKCiENIfz4Dw/8HP95daiRoIpoCghZADGdIgOj730CqJXgt4BAwUGBg+hfPwMDYgHAYaZYQ9AHIYA4hvXpyLSHKAkosIdoCci0hyQJyLCHDAuRUBY76BT/eXUzElXxJsgA1yRI2HKSCaAvIMZxoC8g1nCgLKDGcSAtQMhneCMUW0UTFATQnK+BLLVRJRaSWpEQFETmGIushKogosWToWwAAcCJNGQOFyUEAAAAASUVORK5CYII="/>
      </button>
    </nav>
  )
}

export default Pagination;