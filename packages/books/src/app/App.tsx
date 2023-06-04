import { useState } from 'react';
import { Book, createBook, deleteBookById } from '../domain/book';
import BookCreate from '../components/BookCreate';
import BookList from '../components/BookList';

export function App() {
  const [books, setBooks] = useState<ReadonlyArray<Book>>([]);

  const onBookSubmit = (title: string) => {
    const newBook = createBook(title);
    setBooks([...books, newBook]);
  };

  const onBookDelete = (bookId: string) => {
    const updatedBooks = deleteBookById(books, bookId);
    setBooks(updatedBooks);
  };

  return (
    <div>
      <BookList books={books} onDelete={onBookDelete} />
      <BookCreate handleSubmit={onBookSubmit} />
    </div>
  );
}

export default App;
