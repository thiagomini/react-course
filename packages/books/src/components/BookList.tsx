import { Book } from '../domain/book';
import BookShow from './BookShow';

export type BookListProps = {
  books: ReadonlyArray<Book>;
  onDelete?: (bookId: string) => void;
  onUpdate: (book: Book) => unknown;
};

function BookList({ books, onDelete, onUpdate }: BookListProps) {
  const renderedBooks = books.map((book) => (
    <BookShow book={book} key={book.id} onDelete={onDelete} onEdit={onUpdate} />
  ));

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
