import React from 'react';

const useFetch = (urls) => {
  const [characters, setCharacters] = React.useState([]);
  const [info, setInfo] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function getCharacters(url){
      try{
        setLoading(true);
        const response = await fetch(url);
        const {info, data} = await response.json();
        setInfo(info);
        setCharacters(data);
      }
      catch(err){
        console.log(err.message);
      }
      finally{
        setLoading(false);
      }
    }
    getCharacters(urls);
  }, [urls]);

  return {
    characters,
    setCharacters,
    info,
    loading,
  }
}

export default useFetch;