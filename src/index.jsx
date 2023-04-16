import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import App from "./Modules/Core/App"
import configureStore from './Redux/Store/configureStore';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById('root'), {});
root.render(

  <Provider store={store}>
    <App />
  </Provider>
);
