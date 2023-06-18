import useBooksContext from '../hooks/use-books-context.hook';
import BookShow from './BookShow';

function BookList() {
  const { books } = useBooksContext();

  const renderedBooks = books.map((book) => (
    <BookShow book={book} key={book.id} />
  ));

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
