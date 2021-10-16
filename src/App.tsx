import React from 'react'
import Scaffold from './component/atom/Scaffold';
import BottomBarRouter from './router/BottomBarRouter';
import GlobalStyle from './style'

const App: React.FC = () => (
  <>
    <GlobalStyle/>
    <Scaffold>
      <BottomBarRouter/>
    </Scaffold>
  </>
);

export default App;
