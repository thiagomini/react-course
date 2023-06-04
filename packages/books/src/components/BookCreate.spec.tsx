import { render } from '@testing-library/react';
import { Book, createBook } from '../domain/book';
import BookCreate from './BookCreate';
import userEvent from '@testing-library/user-event';

describe('BookCreate', () => {
  test('renders', () => {
    const { baseElement } = makeComponent();

    expect(baseElement).toBeInTheDocument();
  });

  test('create new book on submit', async () => {
    // Arrange
    const handleSubmit = jest.fn();
    const { getByRole } = makeComponent(handleSubmit);
    const input = getByRole('textbox');
    await userEvent.type(input, 'New Book Title');

    // Act
    await userEvent.keyboard('{enter}');

    // Assert
    expect(handleSubmit).toHaveBeenCalledWith('New Book Title');
  });

  test('emtpies the input on submit', async () => {
    // Arrange
    const { getByRole } = makeComponent();
    const input = getByRole('textbox');
    await userEvent.type(input, 'New Book Title');

    // Act
    await userEvent.keyboard('{enter}');

    // Assert
    expect(input).toHaveValue('');
  });
});

function makeComponent(
  handleSubmit: (title: string) => Book = makeStubHandleSubmit()
) {
  return render(<BookCreate handleSubmit={handleSubmit} />);
}

function makeStubHandleSubmit() {
  return () => createBook('title');
}
