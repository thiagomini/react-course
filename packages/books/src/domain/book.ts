import { randomUUID } from 'crypto';

export type Book = {
  id: string;
  title: string;
};

export const createBook = (title: string): Book => ({
  id: randomUUID(),
  title,
});

export const updateTitle = (book: Book, title: string): Book => ({
  ...book,
  title,
});
