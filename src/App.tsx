import React from 'react';
import { Scaffold } from './components/atoms/Scaffold';
import { BottomBarRouter } from './routes/BottomBarRouter';
import { GlobalStyles } from './styles';

export const App: React.FC = () => (
  <>
    <GlobalStyles />
    <Scaffold>
      <BottomBarRouter />
    </Scaffold>
  </>
);
