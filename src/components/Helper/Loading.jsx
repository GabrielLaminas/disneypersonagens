import React from 'react';
import style from '../../styles/components/Loading.module.scss';
import Disney from '../../assets/logo.svg?component';

const Loading = () => {
  return (
    <div className={style.wrapper}>
      <Disney />
    </div>
  )
}

export default Loading