import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import protest from './images/protest.jpg';
import women from './images/women.jpg';
import protest2 from './images/blm2.jpg';
import child from './images/blackid.jpg';
import './Carousel.scss';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default () => {
  return (
    <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} autoPlay>
      <div>
        <img alt='' src={protest} />
      </div>

      <div>
        <img alt='' src={women} />
      </div>

      <div>
        <img alt='' src={protest2} />
      </div>

      <div>
        <img alt='' src={child} />
      </div>
    </Carousel>
  );
};
