import { FETCH_NEWS, ERROR } from './actionTypes';
import axios from 'axios';

const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://127.0.0.1:5000';

export function fetchNews() {
  return async function (dispatch) {
    try {
      const res = await axios.get(`${REACT_APP_BACKEND_URL}/api`);
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
