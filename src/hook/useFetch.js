import React from 'react'

const useFetch = (id) => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const baseUrl = `https://api.disneyapi.dev/characters/${id}`;

  React.useEffect(() => {
    async function getCharacters(url){
      try{
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      }
      catch(err){
        setError(err.message);
      }
      finally{
        setLoading(false);
      }
    }
    getCharacters(baseUrl);
  }, []);

  return {
    data,
    error,
    loading
  }
}

export default useFetch;