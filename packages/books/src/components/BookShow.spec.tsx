import { render } from '@testing-library/react';
import { Book, createBook } from '../domain/book';
import BookShow from './BookShow';

describe('Book Show', () => {
  test('renders a book', () => {
    // Arrange
    const book = createBook('Title 1');

    // Act
    const { getByText } = makeComponent(book);

    // Assert
    expect(getByText('Title 1')).toBeInTheDocument();
  });
});

function makeComponent(book: Book) {
  return render(<BookShow book={book} />);
}
