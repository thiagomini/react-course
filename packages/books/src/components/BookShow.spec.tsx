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

  test('hides the book title on edit button click', async () => {
    // Arrange
    const book = createBook('Title 1');
    const { getByRole, queryByText } = makeComponent(book);
    const editButton = getByRole('button', { name: 'Edit' });

    // Act
    await userEvent.click(editButton);

    // Assert
    const bookTitle = queryByText('Title 1');
    expect(bookTitle).not.toBeInTheDocument();
  });

  test('shows the book title when clicking the edit button twice', async () => {
    // Arrange
    const book = createBook('Title 1');
    const { getByRole, queryByText } = makeComponent(book);
    const editButton = getByRole('button', { name: 'Edit' });

    // Act
    await userEvent.click(editButton);
    await userEvent.click(editButton);

    // Assert
    const bookTitle = queryByText('Title 1');
    expect(bookTitle).toBeInTheDocument();
  });
});

function makeComponent(book: Book) {
  return render(<BookShow book={book} />);
}
