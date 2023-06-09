import { useState } from 'react';
import { Book, deleteBookById, editBookById } from '../domain/book';
import BookCreate from '../components/BookCreate';
import BookList from '../components/BookList';
import { BooksApi } from '../data/books.api';

export type AppProps = {
  booksApi: BooksApi;
}

export function App({ booksApi }: AppProps) {
  const [books, setBooks] = useState<ReadonlyArray<Book>>([]);

  const onBookSubmit = async (title: string) => {   
    const newBook = await booksApi.create(title);

    setBooks([...books, newBook]);
  };

  const onBookDelete = async (bookId: string) => {
    const updatedBooks = deleteBookById(books, bookId);

    await booksApi.deleteById(bookId);

    setBooks(updatedBooks);
  };

  const onBookUpdate = async (book: Book) => {
    const updatedBooks = editBookById(books, book.id, book.title);

    await booksApi.updateById(book.id, book.title);

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
