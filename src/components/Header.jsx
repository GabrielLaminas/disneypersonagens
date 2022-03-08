import React from 'react'
import { NavLink } from 'react-router-dom';

import style from '../styles/Layout/Header.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <h1>Disney's Characters</h1>
        <NavLink to="/" end>Home</NavLink>
      </div>
    </header>
  )
}

export default Header;