import { NEW_SURVEY, FETCH_SURVEYS } from './actionTypes';
import { getError } from './actionCreatorNews';
import axios from 'axios';

const BACKEND_URL = process.env.BACKEND_URL || 'http://127.0.0.1:5000';

console.log('using', BACKEND_URL);

/* fetch our current survey results from the database */
export function fetchSurveys() {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${BACKEND_URL}/survey`);
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
      const { data } = await axios.post(`${BACKEND_URL}/survey`, { sex, ethnicity, racism, police, vote, community });
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
