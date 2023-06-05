import { render } from '@testing-library/react';
import { Book, createBook } from '../domain/book';
import BookShow from './BookShow';
import userEvent from '@testing-library/user-event';

describe('Book Show', () => {
  test('renders a book', () => {
    // Arrange
    const book = createBook('Title 1');

    // Act
    const { getByText } = makeComponent(book);

    // Assert
    expect(getByText('Title 1')).toBeInTheDocument();
  });

  test('shows an edit input on edit button click', async () => {
    // Arrange
    const book = createBook('Title 1');
    const { getByRole, queryByRole } = makeComponent(book);
    const editButton = getByRole('button', { name: 'Edit' });

    // Act
    await userEvent.click(editButton);

    // Assert
    const editInput = queryByRole('textbox');
    expect(editInput).toBeInTheDocument();
  });
});

function makeComponent(book: Book) {
  return render(<BookShow book={book} />);
}
