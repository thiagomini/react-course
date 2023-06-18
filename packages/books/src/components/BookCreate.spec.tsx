import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from '../context/book.context';
import BookCreate from './BookCreate';
import { mockDeep } from 'jest-mock-extended'
import { BooksApi } from '../data/books.api.interface';

const mockedBooksApi = mockDeep<BooksApi>();
mockedBooksApi.getAll.mockResolvedValue([]);

describe('BookCreate', () => {

  test('renders', () => {
    const { baseElement } = makeComponent();

    expect(baseElement).toBeInTheDocument();
  });

  test('create new book on submit', async () => {
    // Arrange
    const { getByRole } = makeComponent();
    const input = getByRole('textbox');
    await userEvent.type(input, 'New Book Title');

    // Act
    await userEvent.keyboard('{enter}');

    // Assert
    expect(mockedBooksApi.create).toHaveBeenCalledWith('New Book Title');
  });

  test('empties the input on submit', async () => {
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

function makeComponent() {
  return render(
    <Provider booksApi={mockedBooksApi}>
      <BookCreate />
    </Provider>
  );
}


