import React from 'react';
import { Survey } from 'survey-react';
import { useDispatch } from 'react-redux';
import { sendNewSurvey } from './redux/actionCreatorSurvey';
import Chart from './Chart';
import './Surveys.scss';

let surveyJSON = {
  title: 'Black Lives Matter Survey',
  pages: [
    {
      title: 'What is your gender?',
      questions: [
        {
          type: 'radiogroup',
          name: 'sex',
          title: 'Gender',
          isRequired: true,
          choices: ['Male', 'Female'],
        },
      ],
    },
    {
      title: 'What is your ethnicity?',
      questions: [
        {
          type: 'radiogroup',
          name: 'ethnicity',
          title: 'Ethnicity',
          isRequired: true,
          choices: ['Black or African American', 'White', 'Hispanic or Latino', 'Native American or American Indian', 'Asian or Pacificer Islander', 'Other'],
        },
      ],
    },
    {
      title: 'Have you ever been a victim of racism?',
      questions: [
        {
          type: 'radiogroup',
          name: 'racism',
          title: 'Racism',
          isRequired: true,
          choices: ['Yes', 'No'],
        },
      ],
    },
    {
      title: 'Have you ever been mistreated by the police?',
      questions: [
        {
          type: 'radiogroup',
          name: 'police',
          title: 'Police',
          isRequired: true,
          choices: ['Yes', 'No'],
        },
      ],
    },
    {
      title: 'Are you registered to vote?',
      questions: [
        {
          type: 'radiogroup',
          name: 'vote',
          title: 'Voting',
          isRequired: true,
          choices: ['Yes', 'No'],
        },
      ],
    },
    {
      title: 'Are you active in your community?',
      questions: [
        {
          type: 'radiogroup',
          name: 'community',
          title: 'Community',
          isRequired: true,
          choices: ['Yes', 'No'],
        },
      ],
    },
  ],
};

function Surveys() {
  const dispatch = useDispatch();

  // lets see if our JSON survey data makes a new post
  function sendDataToServer(survey) {
    let final = survey.data;
    const { sex, ethnicity, racism, police, vote, community } = final;

    dispatch(sendNewSurvey(sex, ethnicity, racism, police, vote, community));
  }

  return (
    <div className='Survey text-center'>
      <h1>SURVEY</h1>
      <div className='Survey-content'>
        <small>
          this survey is <b>optional</b>
        </small>

        <Survey json={surveyJSON} onComplete={sendDataToServer} />

        <Chart />
      </div>
    </div>
  );
}

export default Surveys;
