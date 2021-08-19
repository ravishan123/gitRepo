import React from 'react';
import { homeObjOne } from './Data';

import { InfoSection, Pricing } from '../../components';

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
     
      <Pricing />
     
    </>
  );
}

export default Home;
