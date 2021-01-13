import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  {Provider} from 'react-redux'
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import 'swiper/swiper-bundle.min.css'
import store from './store'
import {AppProvider} from "./context";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
       <AppProvider>
           <App />
       </AppProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
