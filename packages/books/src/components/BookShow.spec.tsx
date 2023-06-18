import { render, waitFor } from '@testing-library/react';
import { Book, createBook } from '../domain/book';
import BookShow from './BookShow';
import userEvent from '@testing-library/user-event';
import { mockDeep } from 'jest-mock-extended';
import { BooksApi } from '../data/books.api.interface';
import { Provider } from '../context/book.context';

describe('Book Show', () => {
  test('renders a book', () => {
    // Arrange
    const book = createBook('Title 1');

    // Act
    const { queryByText } = makeComponent(book);

    // Assert
    waitFor(() => expect(queryByText('Title 1')).toBeInTheDocument());
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

  test('calls the updateBook method when the user submits the edit form', async () => {
    // Arrange
    const book = createBook('Title 1');
    const { getByRole, booksApi } = makeComponent(book);
    const editButton = getByRole('button', { name: 'Edit' });
    await userEvent.click(editButton);
    const editInput = getByRole('textbox');
    await userEvent.type(editInput, ' Modified', {});

    // Act
    await userEvent.keyboard('{enter}');

    // Assert
    expect(booksApi.updateById).toHaveBeenCalledWith(book.id, 'Title 1 Modified');
  });

  test('closes the edit form when the user submits it', async () => {
    // Arrange
    const book = createBook('Title 1');
    const { getByRole, queryByLabelText } = makeComponent(book);
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

  test('shows an image', async () => {
    // Arrange
    const book = createBook('Title 1');
    const { getByAltText } = makeComponent(book);

    // Act
    const image = getByAltText('Book Cover');

    // Assert
    waitFor(() => expect(image).toBeInTheDocument());
  });
});

function makeComponent(book: Book) {
  const booksApiMock = mockDeep<BooksApi>();
  booksApiMock.getAll.mockResolvedValue([]);
  booksApiMock.updateById.mockResolvedValue(book);
  
  const component = render(
    <Provider booksApi={booksApiMock}>
      <BookShow book={book}/>
    </Provider>
  );

  return {
    ...component,
    booksApi: booksApiMock,
  }
}
