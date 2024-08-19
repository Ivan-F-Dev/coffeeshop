import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { setupStore } from './store/store'
import { Provider } from 'react-redux'
import App from './components/App/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={setupStore()}>
        <App />
    </Provider>
);
