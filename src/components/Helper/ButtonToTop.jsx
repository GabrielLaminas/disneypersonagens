import React from 'react';
import ArrowUpIcon from '../../assets/arrowUp.svg?component';
import style from '../../styles/components/ButtonToTop.module.scss';

const ButtonToTop = () => {
  const [visivel, setVisivel] = React.useState(false);
  
  React.useEffect(() => {
    function handleScroll(){
      if(window.scrollY >= 250){
        setVisivel(true);
      }
      else{
        setVisivel(false);
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  function handleClick(event){
    event.preventDefault();
    window.scrollTo(0, 0);
  }

  return (
    <a
      className={style.container}
      style={{display: `${visivel ? 'flex' : 'none'}`}}
      onClick={handleClick}
    >
      <ArrowUpIcon />
    </a>
  )
}

export default React.memo(ButtonToTop);