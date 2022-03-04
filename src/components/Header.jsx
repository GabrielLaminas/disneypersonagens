import React from 'react'
import { Link } from 'react-router-dom';

import style from '../styles/Layout/Header.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <h1>Disney's Characters</h1>
        <Link to="/">Home</Link>
      </div>
    </header>
  )
}

export default Header