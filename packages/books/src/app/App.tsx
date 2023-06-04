import { useState } from 'react';
import { Book, createBook } from '../domain/book';
import BookCreate from '../components/BookCreate';
import BookList from '../components/BookList';

export function App() {
  const [books, setBooks] = useState<ReadonlyArray<Book>>([]);

  const onBookSubmit = (title: string) => {
    const newBook = createBook(title);
    setBooks([...books, newBook]);
  };

  return (
    <div>
      <BookList books={books} />
      <BookCreate handleSubmit={onBookSubmit} />
    </div>
  );
}

export default App;
