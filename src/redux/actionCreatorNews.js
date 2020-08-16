import { FETCH_NEWS, ERROR } from './actionTypes';
import axios from 'axios';

const BACKEND_URL = process.env.BACKEND_URL || 'http://127.0.0.1:5000';

console.log('using', BACKEND_URL);

export function fetchNews() {
  return async function (dispatch) {
    try {
      const res = await axios.get(`${BACKEND_URL}/api`);
      dispatch(getNews(res));
    } catch (error) {
      console.log(error);
      dispatch(getError());
    }
  };
}

function getNews(news) {
  return { type: FETCH_NEWS, news };
}

export function getError() {
  return { type: ERROR };
}
