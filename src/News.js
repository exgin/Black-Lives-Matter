import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from './redux/actionCreatorNews';
import NewsList from './NewsList';

import { CircularProgress } from '@material-ui/core';

function News() {
  const [isLoading, setIsLoading] = useState(true);
  const { news, error } = useSelector((st) => st);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getNews() {
      await dispatch(fetchNews());
      setIsLoading(false);
    }
    if (isLoading) getNews();
  }, [dispatch, isLoading]);

  if (isLoading)
    return (
      <div className='text-center m-5'>
        <CircularProgress color='info' />
      </div>
    );

  let errorSection = () => (
    <div className='container text-center'>
      <h3 className='m-5'>NEWS</h3>
      <small className=''>there was an error loading the most recent BLM news | checkout other resources of the website!</small>
    </div>
  );

  if (error) return <div>{errorSection()}</div>;

  return (
    <>
      <h3 className='text-center m-5'>NEWS</h3>
      <div className='card-group m-3'>
        <NewsList news={news} />
      </div>
    </>
  );
}

export default News;
