import React from 'react';
import style from '../../styles/components/Search.module.scss';
import SearchIcon from '../../assets/search.svg?component';

const URLBASE = "https://api.disneyapi.dev/character?page=1&pageSize=50";
const URLSEARCH = "https://api.disneyapi.dev/character?name=";

const Search = ({setSearch, setUrl}) => {
   const [textSearch, setTextSearch] = React.useState(() => {
      const searchStorage = localStorage.getItem('search') 
        ? localStorage.getItem('search') 
        : ''
      return searchStorage;
   });

   function handleSearchChange({target}){
      if(target.value.length){
         setTextSearch(target.value);
         localStorage.setItem('search', target.value);
      }
      else{
         setSearch('');
         setTextSearch('');
         setUrl(() => URLBASE);
         localStorage.setItem('url', URLBASE);
         localStorage.setItem('currentPage', 1);
         localStorage.setItem('search', '');
      }
   }

   function handleSearchUp(event){
      if(event.code === 'Enter' || event.code === 'NumpadEnter'){
         handleClickSearch(event);
      }
   }

   function handleClickSearch(event){
      event.preventDefault();
      if(textSearch.length) {
         setSearch(textSearch);
         setUrl(() => URLSEARCH + textSearch);
         localStorage.setItem('url', URLSEARCH + textSearch);
         localStorage.setItem('currentPage', 1);
      }
   }

   return (
      <article className={style.searchArticle}>
         <div className={style.searchArticle__container}>
            <input 
               type='text' name='text_search' id='text_search' 
               value={textSearch}
               onChange={handleSearchChange}
               onKeyUp={handleSearchUp}
               placeholder='Search character' 
            />
            <button type='button' onClick={handleClickSearch}>
               <SearchIcon />
            </button>
         </div>
      </article>
   )
}

export default Search