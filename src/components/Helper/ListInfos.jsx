import React from 'react';
import style from '../../styles/Pages/Character.module.scss';

const ListInfos = ({title, topics}) => {
   return (
      <article className={style.topic}>
         <h2>{title}</h2>
         <ul>
            {
               topics?.length !== 0 
               ? topics?.map((topic, index) => (
                  <li key={index}>{topic}</li>
               )) 
               : <li className={style.nitems}>Do not have</li>
            }
         </ul>
      </article>
   )
}

export default React.memo(ListInfos);