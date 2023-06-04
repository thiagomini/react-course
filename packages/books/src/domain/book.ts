export type Book = {
  id: string;
  title: string;
};

export const updateTitle = (book: Book, title: string): Book => ({
  ...book,
  title,
});
