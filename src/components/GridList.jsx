import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hook/useFetch';
import '../styles/Layout/GridList.module.scss';

const GridList = () => {
  const { data } = useFetch('');
  
  return (
    <section className='container'>
      <div>
      {data && data.data.map((personagens) => (
        <Link 
          to={`/characters/${personagens["_id"]}`} 
          key={personagens["_id"]}
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

export default GridList