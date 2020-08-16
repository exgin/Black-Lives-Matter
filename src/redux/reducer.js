import { FETCH_NEWS, ERROR, FETCH_SURVEYS, NEW_SURVEY } from './actionTypes';

const INIT_STATE = { news: [], surveys: [], error: false };

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case FETCH_NEWS:
      return { ...state, news: action.news.data.articles, error: false };

    case FETCH_SURVEYS:
      return { ...state, surveys: action.survey };

    case NEW_SURVEY:
      console.log(state);
      return { ...state, surveys: [...action.survey], error: false };

    case ERROR:
      return { ...state, error: true };

    default:
      return state;
  }
}

export default reducer;
