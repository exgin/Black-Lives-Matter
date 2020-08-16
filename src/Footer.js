import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubSquare, faFacebook, faTwitter, faReddit } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';

const calender = <FontAwesomeIcon icon={faCalendar} />;
const li = <FontAwesomeIcon icon={faLinkedin} />;
const github = <FontAwesomeIcon icon={faGithubSquare} />;
const mail = <FontAwesomeIcon icon={faMailBulk} />;
const fb = <FontAwesomeIcon icon={faFacebook} />;
const twitter = <FontAwesomeIcon icon={faTwitter} />;
const reddit = <FontAwesomeIcon icon={faReddit} />;

function Footer() {
  return (
    <div className='main-footer'>
      <div className='container'>
        <hr />
        <div className='row'>
          <div className='col'>
            <h6>BLM Social Medias</h6>
            <ul className='footer-list'>
              <li>
                <a target='_blank' href='https://www.reddit.com/r/BlackLivesMatter/'>
                  BLM {reddit}
                </a>
              </li>
              <li>
                <a target='_blank' href='https://twitter.com/blklivesmatter?lang=en'>
                  BLM {twitter}
                </a>
              </li>
              <li>
                <a target='_blank' href='https://www.facebook.com/BlackLivesMatter/'>
                  BLM {fb}
                </a>
              </li>
            </ul>
          </div>

          <div className='col'>
            <h6>Other Crisis</h6>
            <ul className='footer-list'>
              <li>
                <a target='_blank' href='https://www.worldvision.org/disaster-relief-news-stories/lebanon-beirut-explosion-facts-how-help'>
                  Lebanon Beruit
                </a>
              </li>
              <li>
                <a target='_blank' href='https://www.helpguide.org/articles/healthy-living/coronavirus-how-to-help-give-back.htm'>
                  COVID-19
                </a>
              </li>
              <li>
                <a target='_blank' href='https://www.rescue.org/country/central-african-republic'>
                  Central African Republic (CAR)
                </a>
              </li>
            </ul>
          </div>

          <div className='col'>
            <h6>Other BLM Websites</h6>
            <ul className='footer-list'>
              <li>
                <a target='_blank' href='https://blacklivesmatter.com/'>
                  BLM Offical
                </a>
              </li>
              <li>
                <a target='_blank' href='https://blmsites.carrd.co/'>
                  BLM Cards
                </a>
              </li>
              <li>
                <a target='_blank' href='https://creative-capital.org/2020/06/03/resources-ways-to-support-black-lives-matter/'>
                  Creative Capital
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='row footer text-center'>
          <p className='col-md'>
            {calender} {new Date().getFullYear()} Black Lives Matter | Any changes to be made? Contact me!{' '}
            <a target='_blank' href='https://www.linkedin.com/in/sreid20/'>
              {li}
            </a>
            <a target='_blank' href='https://github.com/exgin'>
              {github}
            </a>
            <a target='_blank' href='mailto:exgin3538@gmail.com'>
              {mail}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
