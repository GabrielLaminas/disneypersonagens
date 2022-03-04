import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hook/useFetch';

import style from '../styles/Pages/Personagem.module.scss';
import Loading from './Helper/Loading';

const Personagem = () => {
  const params = useParams();
  const { data, loading } = useFetch(params.id)

  if(loading) return <Loading />
  if(data === null) return null;
  
  return (
    <section className={style.container}>
      <div className={style.grid}>
        <div className={style.imgContainer}>
          <img 
            src={data.imageUrl}
            alt={data.name}
          />
        </div>

        <div className={style.gridInfo}>
          <h1 className={style.title}>{data.name}</h1>

          <ul className={style.topic}>Filmes: 
            {data.films.length !== 0 ? 
            (data.films.map((film, i) => (
              <li key={i} className={style.items}>
                {film}
              </li>
            )))
            : <li className={style.nitems}>Do not have</li>
            }
          </ul>

          <ul className={style.topic}>Short Filmes:
            {data.shortFilms.length !== 0 ? 
            (data.shortFilms.map((shortfilm, i) => (
              <li key={i} className={style.items}>
                {shortfilm}
              </li>
            ))) 
            : <li className={style.nitems}>Do not have</li>
            }
          </ul>

          <ul className={style.topic}>Tv Shows:
            {data.tvShows.length !== 0 ? 
            (data.tvShows.map((tvshow, i) => (
              <li key={i} className={style.items}>
                {tvshow}
              </li>
            ))) 
            : <li className={style.nitems}>Do not have</li>
            }
          </ul>

          <ul className={style.topic}>Video Games:
            {data.videoGames.length !== 0 ? 
            (data.videoGames.map((videogame, i) => (
              <li key={i} className={style.items}>
                {videogame}
              </li>
            ))) 
            : <li className={style.nitems}>Do not have</li>
            }
          </ul>

          <ul className={style.topic}>Park Attractions:
            {data.parkAttractions.length !== 0 ? 
            (data.parkAttractions.map((park, i) => (
              <li key={i} className={style.items}>
                {park}
              </li>
            )))
            : <li className={style.nitems}>Do not have</li>
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Personagem