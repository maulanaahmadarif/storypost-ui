import React from 'react';
import ReactDOM from 'react-dom';

import 'swiper/swiper-bundle.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

import '@storypost/library/lib/css/vendors/reboot.css';
import '@storypost/library/lib/css/vendors/layout.css';
import '@storypost/library/lib/css/var.css';
import '@storypost/library/lib/css/typography.css';
import '@storypost/library/lib/css/global.css';

import './App.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
