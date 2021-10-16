
import React from 'react';

import Colors from './generic/settings/Colors';
import Reset from './generic/Reset';
import Default from './generic/Default';
import Basic from './elements/Base';
import Icons from './generic/settings/Icons';

const Index: React.FC = () => (
  <>
    <Colors />
    <Default/>
    <Icons />
    <Reset />
    <Basic />
  </>
);

export default Index;