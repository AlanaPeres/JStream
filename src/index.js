import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SignUp from './pages/SignUp/signUp';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <SignUp/>
  </React.StrictMode>
);

