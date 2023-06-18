import { render, waitFor } from '@testing-library/react';
import { Provider } from '../context/book.context';
import { Book, createBook } from '../domain/book';
import BookList from './BookList';
import { mockDeep } from 'jest-mock-extended';
import { BooksApi } from '../data/books.api.interface';

const booksApi = mockDeep<BooksApi>();

describe('Book List', () => {
  test('renders a list of books', () => {
    // Arrange
    const books = [createBook('Title 1'), createBook('Title 2')];

    // Act
    const { queryByText } = makeComponent(books);

    // Assert
    waitFor(() => expect(queryByText('Title 1')).toBeInTheDocument());
    waitFor(() => expect(queryByText('Title 2')).toBeInTheDocument());
  });
});

function makeComponent(books: Book[] = []) {
  booksApi.getAll.mockResolvedValue(books);
  return render(
    <Provider booksApi={booksApi}>
      <BookList/>
    </Provider>
  );
}
