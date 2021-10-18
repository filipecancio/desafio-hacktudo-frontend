import React from 'react';

import { Colors } from './generic/settings/Colors';
import { Reset } from './generic/Reset';
import { Default } from './generic/Default';
import { Base } from './elements/Base';
import { Icons } from './generic/settings/Icons';

export const GlobalStyles: React.FC = () => (
  <>
    <Colors />
    <Default />
    <Icons />
    <Reset />
    <Base />
  </>
);
