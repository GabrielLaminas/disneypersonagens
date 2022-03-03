import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hook/useFetch';

import style from '../styles/Pages/Personagem.module.scss';

const Personagem = () => {
  const params = useParams();
  const { data } = useFetch(params.id)

  if(data === null) return null

  return (
    <section className={style.Container}>
      <div>
        <img 
          src={data.imageUrl}
          alt={data.name}
        />
      </div>

      <div>
        <h1>{data.name}</h1>

        <span>Filmes: </span>
        {data.films.length !== 0 ? 
        (data.films.map((film, i) => (
          <span key={i}>{film} {" | "}</span>
        )))
        : 'Não tem'
        }
        <br/>

        <span>Short Filmes: </span>
        {data.shortFilms.length !== 0 ? 
        (data.shortFilms.map((film, i) => (
          <span key={i}>{film} {" | "}</span>
        ))) 
        : 'Não tem'}
        <br/>

        <span>Tv Shows: </span>
        {data.tvShows.length !== 0 ? 
        (data.tvShows.map((film, i) => (
          <span key={i}>{film} {" | "}</span>
        ))) 
        : 'Não tem'
        }
        <br/>

        <span>Video Games: </span>
        {data.videoGames.length !== 0 ? 
        (data.videoGames.map((film, i) => (
          <span key={i}>{film} {" | "}</span>
        ))) 
        : 'Não tem'
        }
        <br/>

        <span>Park Attractions: </span>
        {data.parkAttractions.length !== 0 ? 
        (data.parkAttractions.map((film, i) => (
          <span key={i}>{film} {" | "}</span>
        )))
        : 'Não tem'
        }
      </div>
    </section>
  )
}

export default Personagem