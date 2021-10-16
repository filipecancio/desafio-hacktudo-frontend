import React from 'react'
import Scaffold from './component/atom/Scaffold';
import GlobalStyle from './styles'

const App: React.FC = () => (
  <>
    <GlobalStyle/>
    <Scaffold>
      <h1>Hello World!</h1>
    </Scaffold>
  </>
);

export default App;
