import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Modal from 'react-modal'


import { GlobalStyle } from './styles/global';

import AppProvider from './hooks';

import Routes from './routes';


Modal.setAppElement('#root');

export function App() {

  return (
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>

      <GlobalStyle />
    </Router>
  );
}
