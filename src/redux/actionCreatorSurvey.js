import { NEW_SURVEY, FETCH_SURVEYS } from './actionTypes';
import { getError } from './actionCreatorNews';
import axios from 'axios';

const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://127.0.0.1:5000';

console.log('using', REACT_APP_BACKEND_URL);

console.log(process.env);

/* fetch our current survey results from the database */
export function fetchSurveys() {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${REACT_APP_BACKEND_URL}/survey`);
      dispatch(getSurveys(data));
    } catch (error) {
      console.log(error);
      dispatch(getError());
    }
  };
}

function getSurveys(survey) {
  return { type: FETCH_SURVEYS, survey };
}

/* send our new survey results to the api */
export function sendNewSurvey(sex, ethnicity, racism, police, vote, community) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(`${REACT_APP_BACKEND_URL}/survey`, { sex, ethnicity, racism, police, vote, community });
      dispatch(sendSurvey(data));
    } catch (error) {
      console.log(error);
      dispatch(getError());
    }
  };
}

function sendSurvey(survey) {
  return { type: NEW_SURVEY, survey };
}
