import { Book } from '../domain/book';

export type BookShowProps = {
  book: Book;
};

function BookShow({ book }: BookShowProps) {
  return <div>{book.title}</div>;
}

export default BookShow;
