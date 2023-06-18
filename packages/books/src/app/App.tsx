import { useContext } from 'react';
import BookCreate from '../components/BookCreate';
import BookList from '../components/BookList';
import BookContext, { BookContextType } from '../context/book.context';

export function App() {
  const {
    books,
    deleteBook,
    updateBook,
  } = useContext(BookContext) as BookContextType

  return (
    <div>
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBook} onUpdate={updateBook} />
      <BookCreate/>
    </div>
  );
}

export default App;
