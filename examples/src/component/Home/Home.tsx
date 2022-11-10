import React from 'react';
import { Icon, IconText } from '@pdg/react-component';

const Home = () => {
  return (
    <div>
      <div>
        <Icon color='error'>Error</Icon> Icon
      </div>
      <div>
        <IconText icon='Person' fontSize='large'>
          IconText
        </IconText>
      </div>
    </div>
  );
};

export default Home;
