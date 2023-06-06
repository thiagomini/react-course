import { render } from '@testing-library/react';
import { Book, createBook } from '../domain/book';
import BookShow from './BookShow';
import userEvent from '@testing-library/user-event';
import { noop } from '@react-course/utils';

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

  test('calls the onEdit callback when the user submits the edit form', async () => {
    // Arrange
    const book = createBook('Title 1');
    const onEdit = jest.fn();
    const { getByRole } = makeComponent(book, onEdit);
    const editButton = getByRole('button', { name: 'Edit' });
    await userEvent.click(editButton);
    const editInput = getByRole('textbox');
    await userEvent.type(editInput, ' Modified', {});

    // Act
    await userEvent.keyboard('{enter}');

    // Assert
    expect(onEdit).toHaveBeenCalledWith({
      id: book.id,
      title: 'Title 1 Modified',
    });
  });

  test('closes the edit form when the user submits it', async () => {
    // Arrange
    const book = createBook('Title 1');
    const onEdit = jest.fn();
    const { getByRole, queryByLabelText } = makeComponent(book, onEdit);
    const editButton = getByRole('button', { name: 'Edit' });
    await userEvent.click(editButton);
    const editInput = getByRole('textbox');
    await userEvent.type(editInput, ' Modified', {});

    // Act
    await userEvent.keyboard('{enter}');

    // Assert
    const editInputAfterSubmit = queryByLabelText('Edit Book Title');
    expect(editInputAfterSubmit).not.toBeInTheDocument();
  });
});

function makeComponent(book: Book, onEdit: (book: Book) => void = () => ({})) {
  return render(<BookShow book={book} onEdit={onEdit} onDelete={noop} />);
}
