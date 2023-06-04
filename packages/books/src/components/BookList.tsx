import { Book } from '../domain/book';

export type BookListProps = {
  books: ReadonlyArray<Book>;
};

function BookList({ books }: BookListProps) {
  const renderedBooks = books.map((book) => (
    <div key={book.id}>{book.title}</div>
  ));

  return <div>{renderedBooks}</div>;
}

export default BookList;
