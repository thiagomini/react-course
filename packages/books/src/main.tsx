import { HttpClientAxios } from '@react-course/utils';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/App';
import { Provider } from './context/book.context';
import { BooksApi } from './data/books.api';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const httpClient = new HttpClientAxios();
const booksApi = new BooksApi(httpClient);
root.render(
  <StrictMode>
    <Provider booksApi={booksApi}>
      <App />
    </Provider>
  </StrictMode>
);
