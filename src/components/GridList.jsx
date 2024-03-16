import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hook/useFetch';
import style from '../styles/Layout/GridList.module.scss';

import Head from './Helper/Head';
import Loading from './Helper/Loading';
import Pagination from './Helper/Pagination';
import ButtonToTop from './Helper/ButtonToTop';
import Search from './Helper/Search';

const URLBASE = 'https://api.disneyapi.dev/character?page=1&pageSize=50';

const GridList = () => {
  const [search, setSearch] = React.useState('');  
  const [url, setUrl] = React.useState(URLBASE);
  const { characters, info, loading } = useFetch(url);

  React.useEffect(() => {
    const getUrl = localStorage.getItem('url') || URLBASE;
    const getSearch = localStorage.getItem('search') || '';
    setUrl(getUrl);
    setSearch(getSearch); 
  }, []);

  return (
    <main className={style.container}>
      <Head 
        title="Disney's Characters"
        description="Project about disney's characters you can see list of characters and their details"
      />

      <Search setSearch={setSearch} setUrl={setUrl} />

      {loading && <Loading />}  

      {(search.length > 0 && info.count === 0) && (
        <section>
          <p className={style.notCharacters}><strong>{search}</strong> não existe.</p>
        </section>
      )}

      <section className={style.grid} style={(info.count === 0) ? {display: 'none'} : {}}>
        {info.count === 1 && [characters].map(listCharacter)}
        {info.count > 1 && characters.length > 1 && characters.map(listCharacter)}
      </section>

      {(info.hasOwnProperty('totalPages') && info.totalPages > 1) && <Pagination info={info} setUrl={setUrl} search={search} />}

      <ButtonToTop />
    </main>
  );
}
export default GridList;

const listCharacter = (character) => {
  if(!character["_id"]) return null

  return (
    <Link 
      to={`/characters/${character["_id"]}`} 
      key={character["_id"]}
      className={style.gridItem}
    >
      <img 
        src={
          character["imageUrl"] 
            ? character["imageUrl"] 
            : 'https://static.wikia.nocookie.net/disney/images/7/7c/Noimage.png'
        }
        alt={character["name"]}
      />
      <p>{character["name"]}</p>
    </Link>
  )
}