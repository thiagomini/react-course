// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import { useState } from 'react';
import { Book, createBook } from '../domain/book';
import BookCreate from '../components/BookCreate';

export function App() {
  const [books, setBooks] = useState<Book[]>([]);

  const onBookSubmit = (title: string) => {
    const newBook = createBook(title);
    setBooks([...books, newBook]);
  };

  const renderedBooks = books.map((book) => (
    <li key={book.id}>{book.title}</li>
  ));

  return (
    <div>
      <BookCreate handleSubmit={onBookSubmit} />
      {renderedBooks}
    </div>
  );
}

export default App;
