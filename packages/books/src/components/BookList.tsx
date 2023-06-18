import { useContext } from 'react';
import BookContext, { BookContextType } from '../context/book.context';
import BookShow from './BookShow';



function BookList() {
  const { books } = useContext(BookContext) as BookContextType

  const renderedBooks = books.map((book) => (
    <BookShow book={book} key={book.id}/>
  ));

  return (
    <div className="book-list">
      {renderedBooks}
    </div>
  );
}

export default BookList;
