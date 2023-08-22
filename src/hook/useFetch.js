import React from 'react';

const useFetch = (urls) => {
  const [data, setData] = React.useState(null);
  const [infoPage, setInfoPage] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function getCharacters(url){
      try{
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setData(json.data);
        setInfoPage(json.info);
      }
      catch(err){
        setError(err.message);
      }
      finally{
        setLoading(false);
      }
    }
    getCharacters(urls);
  }, [urls]);

  return {
    data,
    infoPage,
    error,
    loading
  }
}

export default useFetch;