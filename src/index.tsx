import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SummaryPage from "./pages/SummaryPage/SummaryPage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SummaryPage />
  </React.StrictMode>
);

