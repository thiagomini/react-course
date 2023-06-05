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

export const deleteBookById = (
  books: ReadonlyArray<Book>,
  id: string
): Book[] => books.filter((book) => book.id !== id);

export const editBookById = (
  books: ReadonlyArray<Book>,
  id: string,
  title: string
): Book[] => {
  const index = books.findIndex((book) => book.id === id);
  if (index === -1) {
    return [...books];
  }
  const updatedBook = updateTitle(books[index], title);
  return [...books.slice(0, index), updatedBook, ...books.slice(index + 1)];
};
