import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hook/useFetch';

import style from '../styles/Pages/Personagem.module.scss';

const Personagem = () => {
  const params = useParams();
  const { data } = useFetch(params.id)

  if(data === null) return null
  console.log(data)
  return (
    <section className={style.container}>
      <div className={style.grid}>
        <div>
          <img 
            src={data.imageUrl}
            alt={data.name}
          />
        </div>

        <div className={style.gridInfo}>
          <h1 className={style.title}>{data.name}</h1>

          <span className={style.topic}>Filmes: </span>
          {data.films.length !== 0 ? 
          (data.films.map((film, i) => (
            <span key={i} className={style.items}>
              {film} {" | "}
            </span>
          )))
          : <span>Do not have</span>
          }
          <br/>

          <span className={style.topic}>Short Filmes: </span>
          {data.shortFilms.length !== 0 ? 
          (data.shortFilms.map((shortfilm, i) => (
            <span key={i} className={style.items}>
              {shortfilm} {" | "}
            </span>
          ))) 
          : <span className={style.nitems}>Do not have</span>
          }
          <br/>

          <span className={style.topic}>Tv Shows: </span>
          {data.tvShows.length !== 0 ? 
          (data.tvShows.map((tvshow, i) => (
            <span key={i} className={style.items}>
              {tvshow} {" | "}
            </span>
          ))) 
          : <span className={style.nitems}>Do not have</span>
          }
          <br/>

          <span className={style.topic}>Video Games: </span>
          {data.videoGames.length !== 0 ? 
          (data.videoGames.map((videogame, i) => (
            <span key={i} className={style.items}>
              {videogame} {" | "}
            </span>
          ))) 
          : <span className={style.nitems}>Do not have</span>
          }
          <br/>

          <span className={style.topic}>Park Attractions: </span>
          {data.parkAttractions.length !== 0 ? 
          (data.parkAttractions.map((park, i) => (
            <span key={i} className={style.items}>
              {park} {" | "}
            </span>
          )))
          : <span className={style.nitems}>Do not have</span>
          }
        </div>
      </div>
    </section>
  )
}

export default Personagem