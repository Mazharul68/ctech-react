import React from 'react';

import Banner from '../Home/Banner';
import Service from '../Home/Service';
import About from '../Home/About';
import Count from '../Home/Count';
import Goal from '../Home/Goal';
import TabPanal from '../Home/TabPanal';
import News from '../Home/News';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Crystal Technology Bangladesh Ltd.</title>
      </Helmet>
      <div>
        <Banner />
        <Service />
        <About />
        <Count />
        <Goal />
        <TabPanal />
        <News />
      </div>
    </>
  );
};

export default Home;