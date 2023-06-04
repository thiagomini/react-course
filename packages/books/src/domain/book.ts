import { v4 as uuidv4 } from 'uuid';

export type Book = {
  id: string;
  title: string;
};

export const createBook = (title: string): Book => ({
  id: uuidv4(),
  title,
});

export const updateTitle = (book: Book, title: string): Book => ({
  ...book,
  title,
});

export const deleteBookById = (books: Book[], id: string): Book[] =>
  books.filter((book) => book.id !== id);
