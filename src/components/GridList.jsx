import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hook/useFetch';
import style from '../styles/Layout/GridList.module.scss';

import Loading from './Helper/Loading';
import Pagination from './Helper/Pagination';
import Select from './Helper/Select';

const GridList = () => {
  const [select, setSelect] = React.useState('10');
  const [page, setPage] = React.useState(1);
  const url = `https://api.disneyapi.dev/characters?page=${page}`;
  const { data, loading } = useFetch(url);

  const dataList = React.useMemo(() => {
    if(data !== null){
      const dataFilter = data.data.filter((item, index) => {
        if(index < select){
          return item;
        }
      });
      return dataFilter;
    }
  }, [data, select, page]);


  if(loading) return <Loading />

  function handleClick(){
    setPage(page+1);
  }

  return (
    <section className={style.container}>
      <Select 
        value={select}
        setValue={setSelect}
      />

      <div className={style.grid}>
      {dataList && dataList.map((personagens) => (
        <Link 
          to={`/characters/${personagens["_id"]}`} 
          key={personagens["_id"]}
          className={style.gridItem}
        >
          <img 
            src={personagens["imageUrl"]}
            alt={personagens["name"]}
          />
          <p>{personagens["name"]}</p>
        </Link>
      ))}
      </div>
      <button onClick={handleClick}>
        Próxima pagina
      </button>
     {/* <Pagination />*/}
    </section>
  );
}

export default GridList;