import './index.css';
import './media.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
// import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { persistor, store } from './redux/store';
import App from 'App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}> */}
    <BrowserRouter basename="/react-template">
      <App />
    </BrowserRouter>
    {/* </Provider>
    </PersistGate> */}
  </React.StrictMode>
);
