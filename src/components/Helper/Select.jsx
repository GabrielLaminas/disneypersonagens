import React from 'react';
import style from '../../styles/components/Select.module.scss';

const Select = ({ value, setValue }) => {

  function handleChange({ target }){
    setValue(target.value);
    window.localStorage.setItem('select', target.value);
  }

  return (
    <div className={style.containerSelect}>
      <label htmlFor='items'>Characters: </label>

      <select
        name='items' 
        id='items'
        value={value} 
        onChange={handleChange}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
    </select>
    </div>
  )
}

export default React.memo(Select);