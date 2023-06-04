import { Book } from '../domain/book';
import BookShow from './BookShow';

export type BookListProps = {
  books: ReadonlyArray<Book>;
};

function BookList({ books }: BookListProps) {
  const renderedBooks = books.map((book) => (
    <BookShow book={book} key={book.id} />
  ));

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
