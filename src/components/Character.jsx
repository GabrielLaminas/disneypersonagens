import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../hook/useFetch';
import style from '../styles/Pages/Character.module.scss';
import Head from './Helper/Head';
import Loading from './Helper/Loading';
import ListInfos from './Helper/ListInfos';
import ArrowBackIcon from '../assets/arrow-back.svg?component';

const Character = () => {
  const { id } = useParams();
  const { characters, loading } = useFetch(`https://api.disneyapi.dev/character/${id}`);

  if(loading) return <Loading />

  return (
    <section className={style.container}>
      <Head 
        title={`Character | ${characters.name}`}
        description="characters and their details"
      />

      <article className={style.backhome}>
        <Link to='/'>
          <ArrowBackIcon />
          Back
        </Link>
      </article>

      <div className={style.grid}>
        <div className={style.imgContainer}>
          <img 
            src={
              characters.imageUrl 
                ? characters.imageUrl
                : 'https://static.wikia.nocookie.net/disney/images/7/7c/Noimage.png'
            }
            alt={characters.name}
          />
        </div>

        <section className={style.gridInfo}>
          <h1 className={style.title}>{characters.name}</h1>
          
          <ListInfos
            title="Filmes:" 
            topics={characters.films} 
          />

          <ListInfos
            title="Short Filmes:" 
            topics={characters.shortFilms}
          />

          <ListInfos
            title="Tv Shows:" 
            topics={characters.tvShows}
          />

          <ListInfos
            title="Video Games:" 
            topics={characters.videoGames}
          />

          <ListInfos
            title="Park Attractions:" 
            topics={characters.parkAttractions}
          />          
        </section>
      </div>
    </section>
  )
}

export default Character; 