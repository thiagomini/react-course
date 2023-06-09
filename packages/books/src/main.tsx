import './index.css';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/App';
import { HttpClientAxios } from '@react-course/utils';
import { BooksApi } from './data/books.api';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const httpClient = new HttpClientAxios()
const booksApi = new BooksApi(httpClient);
root.render(
  <StrictMode>
    <App booksApi={booksApi}/>
  </StrictMode>
);
