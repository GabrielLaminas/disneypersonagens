import React from 'react';
import Arrow from '../../assets/arrowUp.svg?component';
import style from '../../styles/components/ButtonToTop.module.scss';

const ButtonToTop = () => {

  return (
    <a
      className={style.container}
    >
      <Arrow />
    </a>
  )
}

export default React.memo(ButtonToTop);