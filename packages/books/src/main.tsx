import './index.css';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/App';
import { HttpClientAxios } from '@react-course/utils';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const httpClient = new HttpClientAxios()
root.render(
  <StrictMode>
    <App httpClient={httpClient}/>
  </StrictMode>
);
