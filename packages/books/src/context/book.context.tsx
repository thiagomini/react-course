import { HttpClientAxios } from '@react-course/utils';
import React, { createContext, useEffect, useState } from 'react';
import { BooksApi } from '../data/books.api.interface';
import { HttpBooksApi } from '../data/http-books.api';
import { Book, deleteBookById, editBookById } from '../domain/book';

export type BookContextType = {
  books: ReadonlyArray<Book>;
  createBook: (title: string) => Promise<void>;
  deleteBook: (bookId: string) => Promise<void>;
  updateBook: (book: Book) => Promise<void>;
}

const BookContext = createContext<BookContextType | null>(null);

export type BookContextProps = React.PropsWithChildren & {
  booksApi: BooksApi
}

function createBooksApi() {
 const httpClient = new HttpClientAxios();
  return new HttpBooksApi(httpClient);
}

export function Provider({ children, booksApi = createBooksApi() }: BookContextProps) {
  const [books, setBooks] = useState<ReadonlyArray<Book>>([]);

  useEffect(() => {
    booksApi.getAll().then(setBooks);
  }, [booksApi])


  const createBook = async (title: string) => {   
    const newBook = await booksApi.create(title);

    setBooks([...books, newBook]);
  };

  const deleteBook = async (bookId: string) => {
    const updatedBooks = deleteBookById(books, bookId);

    await booksApi.deleteById(bookId);

    setBooks(updatedBooks);
  };

  const updateBook = async (book: Book) => {
    const updatedBook = await booksApi.updateById(book.id, book.title);

    const updatedBooks = editBookById(books, updatedBook.id, updatedBook.title);

    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    createBook,
    deleteBook,
    updateBook,
  };

  return (
    <BookContext.Provider value={valueToShare}>{children}</BookContext.Provider>
  );
}

export default BookContext;
