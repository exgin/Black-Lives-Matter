import React from 'react';
import './Donate.scss';

function Donate() {
  return (
    <div className='contianer vh-100 text-center'>
      <h1>DONATE</h1>

      <div className='container'>
        <h3 className='Donate-title'>Funds & Organizations</h3>
        <ul className='funds-org list-unstyled'>
          <li>
            <a target='_blank' rel='noopener noreferrer' href='https://mnfreedomfund.org/'>
              Minnestoa Freedom Fund
            </a>
          </li>
          <li>
            <a target='_blank' rel='noopener noreferrer' href='https://www.communityjusticeexchange.org/nbfn-directory'>
              National Bail Fund Network
            </a>
          </li>
          <li>
            <a target='_blank' rel='noopener noreferrer' href='https://www.joincampaignzero.org/'>
              Campaign Zero
            </a>
          </li>
          <li>
            <a target='_blank' rel='noopener noreferrer' href='https://www.volunteermatch.org/'>
              VolunteerMatch
            </a>
          </li>
          <li>
            <a target='_blank' rel='noopener noreferrer' href='https://www.showingupforracialjustice.org/'>
              Showing Up For Racial Justice
            </a>
          </li>
        </ul>
      </div>

      <div className='small-text'>
        <small>
          ...<b>only that many?</b> Why?
        </small>
      </div>

      <div className='container'>
        While donating to organizations and fundraisers are an excellent ways to boost awareness to a cause; unfortunately there <b>are many scams & shady practices occuring.</b> The best way to
        donate is to support & give back your <b> local black / any minority businesses or community members.</b>
      </div>
    </div>
  );
}

export default Donate;
