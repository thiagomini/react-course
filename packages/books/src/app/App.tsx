import { useState } from 'react';
import { Book, createBook, deleteBookById, editBookById } from '../domain/book';
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

  const onBookUpdate = (book: Book) => {
    const updatedBooks = editBookById(books, book.id, book.title);
    setBooks(updatedBooks);
  };

  return (
    <div>
      <h1>Reading List</h1>
      <BookList books={books} onDelete={onBookDelete} onUpdate={onBookUpdate} />
      <BookCreate handleSubmit={onBookSubmit} />
    </div>
  );
}

export default App;
