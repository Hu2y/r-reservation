import React from 'react';

import Routes from '@/routes/index';
import Header from '@/components/Header/Header.component';

import GlobalStyle from '@/styles/GlobalStyle';
import { MainWrap } from './styles/App.styles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes />
    </>
  )
};

export default App;
