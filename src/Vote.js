import React from 'react';
import './Vote.scss';

function Vote() {
  return (
    <div className='text-center'>
      <h1>VOTE</h1>
      <div className='Vote vh-100'>
        <p className='display-4'>
          The best way to make a change is to <b>vote.</b>{' '}
          <a style={{ textDecoration: 'none' }} href='https://vote.gov/'>
            Register now.
          </a>
        </p>
      </div>
    </div>
  );
}

export default Vote;
