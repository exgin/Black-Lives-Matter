import React from 'react';
import './NewsList.scss';

import { Card, CardMedia, CardContent, Typography, CardActions, Button, CardHeader } from '@material-ui/core';

function NewsList({ news }) {
  const convertTime = (time) => {
    time = new Date();
    return time.toString();
  };

  let allNews = news.map((el, idx) => (
    <div className='NewsCards' key={idx}>
      <Card className='Card'>
        <CardMedia className='NewCards-img' component='img' image={el.urlToImage} alt='' />
        <CardHeader title={el.title} subheader={convertTime(el.publishedAt)} />

        <CardContent>
          <Typography>{el.description}</Typography>
        </CardContent>
        <CardActions>
          <Button size='small' href={el.url}>
            Visit Article
          </Button>
        </CardActions>
      </Card>
    </div>
  ));

  return <>{allNews}</>;
}

NewsList.defaultProps = {
  news: [],
};

export default NewsList;
