import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hook/useFetch';
import style from '../styles/Layout/GridList.module.scss';
import Head from './Helper/Head';

import Loading from './Helper/Loading';
import Pagination from './Helper/Pagination';
import Select from './Helper/Select';
import ButtonToTop from './Helper/ButtonToTop';

const GridList = () => {
  const [select, setSelect] = React.useState(() => {
    const selectStorage = window.localStorage.getItem('select') 
      ? window.localStorage.getItem('select')
      : window.localStorage.setItem('select', '20')
    return selectStorage;
  });

  const [page, setPage] = React.useState(() => {
    const pageStorage = window.localStorage.getItem('page') 
      ? window.localStorage.getItem('page') 
      : window.localStorage.setItem('page', Number(1))
    return pageStorage;
  });

  const { data, loading } = useFetch(`https://api.disneyapi.dev/characters?page=${page}`);

  React.useEffect(() => {
    useFetch(`https://api.disneyapi.dev/characters?page=${page}`);
  }, []);

  const dataList = React.useMemo(() => {
    if(data !== null){
      const dataFilter = data.data.filter((item, index) => {
        if(index < select){
          return item;
        }
      });
      return dataFilter;
    }
  }, [data, select]);

  if(loading) return <Loading />
  
  return (
    <main className={style.container}>
      <Head 
        title="Disney's Characters"
        description="Project about disney's characters you can see list of characters and their details"
      />

      <Select 
        value={select}
        setValue={setSelect}
      />

      <section className={style.grid}>
      {dataList && dataList.map((personagens) => (
        <Link 
          to={`/characters/${personagens["_id"]}`} 
          key={personagens["_id"]}
          className={style.gridItem}
        >
          <img 
            src={
              personagens["imageUrl"] ? 
                personagens["imageUrl"] 
                : 'https://static.wikia.nocookie.net/disney/images/7/7c/Noimage.png'
            }
            alt={personagens["name"]}
          />
          <p>{personagens["name"]}</p>
        </Link>
      ))}
      </section>

      <Pagination
          totalPage={data && data.totalPages}
          page={page} 
          setPage={setPage}
      />

      <ButtonToTop />
    </main>
  );
}

export default GridList;