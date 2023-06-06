import { render } from '@testing-library/react';
import BookList from './BookList';
import { Book, createBook } from '../domain/book';

describe('Book List', () => {
  test('renders a list of books', () => {
    // Arrange
    const books = [createBook('Title 1'), createBook('Title 2')];

    // Act
    const { getByText } = makeComponent(books);

    // Assert
    expect(getByText('Title 1')).toBeInTheDocument();
    expect(getByText('Title 2')).toBeInTheDocument();
  });
});

function makeComponent(books: ReadonlyArray<Book>) {
  return render(
    <BookList books={books} onUpdate={() => ({})} onDelete={() => ({})} />
  );
}
