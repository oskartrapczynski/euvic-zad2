import { StrictMode } from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// import { store } from './store/store';
import App from './App';

import './index.css';

import './i18n';

const rootElement = document.getElementById('root');
render(
  <StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter basename="/euvic-zad2">
      <App />
    </BrowserRouter>
    {/* </Provider> */}
  </StrictMode>,
  rootElement
);
