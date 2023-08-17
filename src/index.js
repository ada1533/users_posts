import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App'; // Import your main App component
import { Provider } from 'react-redux';
import store from './store/store';

// Use createRoot to render your app
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Wrap your app with Provider
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
