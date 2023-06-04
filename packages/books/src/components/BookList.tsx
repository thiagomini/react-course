import { Book } from '../domain/book';
import BookShow from './BookShow';

export type BookListProps = {
  books: ReadonlyArray<Book>;
  onDelete?: (bookId: string) => void;
};

function BookList({ books, onDelete }: BookListProps) {
  const renderedBooks = books.map((book) => (
    <BookShow book={book} key={book.id} onDelete={onDelete} />
  ));

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
