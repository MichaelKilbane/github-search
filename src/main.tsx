import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { StoreProvider } from './hooks/store';
import AppRoutes from './routes';
import { store } from './store';
import GlobalStyle from './styled';

const App = () => (
  <StoreProvider value={store}>
    <GlobalStyle />
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StoreProvider>
);

export default App;
