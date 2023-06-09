import { useState } from 'react';
import { Book, createBook, deleteBookById, editBookById } from '../domain/book';
import BookCreate from '../components/BookCreate';
import BookList from '../components/BookList';
import { HttpClient } from '@react-course/utils';

export type AppProps = {
  httpClient: HttpClient;
}

export function App({ httpClient }: AppProps) {
  const [books, setBooks] = useState<ReadonlyArray<Book>>([]);

  const onBookSubmit = async (title: string) => {
    const newBook = createBook(title);
    
    await httpClient.send({
      method: 'POST',
      url: 'http://localhost:3001/books',
      body: { ...newBook }
    })

    setBooks([...books, newBook]);
  };

  const onBookDelete = async (bookId: string) => {
    const updatedBooks = deleteBookById(books, bookId);

    await httpClient.send({
      method: 'DELETE',
      url: `http://localhost:3001/books/${bookId}`
    })

    setBooks(updatedBooks);
  };

  const onBookUpdate = async (book: Book) => {
    const updatedBooks = editBookById(books, book.id, book.title);

    await httpClient.send({
      method: 'PUT',
      url: `http://localhost:3001/books/${book.id}`,
      body: { 
        title: book.title
       }
    })

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
