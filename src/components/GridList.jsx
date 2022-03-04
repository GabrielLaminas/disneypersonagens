import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hook/useFetch';
import style from '../styles/Layout/GridList.module.scss';
import Select from './Helper/Select';

const GridList = () => {
  const { data } = useFetch('');
  const [select, setSelect] = React.useState('50');
  
  if(data === null) return null;

  const dataFilter = data.data.filter((datas, index) => {
    if(index < select){
      return datas;
    }
  });

  return (
    <section className={style.container}>
      <Select 
        value={select}
        setValue={setSelect}
      />

      <div className={style.grid}>
      {dataFilter.map((personagens) => (
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
    </section>
  );
}

export default GridList;