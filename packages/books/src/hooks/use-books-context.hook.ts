import { useContext } from 'react';
import BooksContext, { BookContextType } from '../context/book.context';

function useBooksContext() {
  const context = useContext(BooksContext) as BookContextType;
  if (!context) {
    throw new Error('useBooksContext must be used within a BooksProvider');
  }
  return context;
}

export default useBooksContext;
