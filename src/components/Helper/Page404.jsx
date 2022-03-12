import React from 'react'
import Error404 from '../../assets/404Error.svg?component';
import style from '../../styles/Pages/Page404.module.scss';

const Page404 = () => {
  return (
    <section className={style.container}>
      <Error404/>
    </section>
  )
}

export default Page404;