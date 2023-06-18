import { render, waitFor, waitForElementToBeRemoved } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import App from './App';
import { HttpClientAxios } from '@react-course/utils';
import { BooksApi } from '../data/books.api';
import { Provider } from '../context/book.context';

const booksApi = new BooksApi(new HttpClientAxios());


describe('App', () => {

  beforeEach(async () => {
    await booksApi.unsafeDeleteAll();
  });

  it('should render successfully', () => {
    const { baseElement } = makeComponent();
    expect(baseElement).toBeTruthy();
  });

  test('loads existing books from the api', async () => {
    // Arrange
    await booksApi.create('Existing Book Title');
    const { queryByText } = makeComponent();

    // Act & Assert
    await waitFor(() => expect(queryByText('Existing Book Title')).toBeInTheDocument());
  });

  test('adds a book when the user submits the form', async () => {
    // Arrange
    const { getByLabelText, queryByText } = makeComponent();
    const input = getByLabelText('Enter Book Title');
    await userEvent.type(input, 'New Book Title');

    // Act
    await userEvent.keyboard('{enter}');

    // Assert
    await waitFor(() => expect(queryByText('New Book Title')).toBeInTheDocument());
  });

  test('deletes a book when the user clicks the delete button', async () => {
    // Arrange
    const { getByLabelText, queryByText, findByRole } = makeComponent();
    const input = getByLabelText('Enter Book Title');
    await userEvent.type(input, 'New Book Title');
    await userEvent.keyboard('{enter}');
    const deleteButton = await findByRole('button', { name: 'Delete' });

    // Act
    await userEvent.click(deleteButton);

    // Assert
    await waitForElementToBeRemoved(() => queryByText('New Book Title'));
  });

  test('updates a book title when the user edit it and submit the form', async () => {
    // Arrange
    const { getByLabelText, queryByText, findByRole } = makeComponent();
    const input = getByLabelText('Enter Book Title');
    await userEvent.type(input, 'New Book Title');
    await userEvent.keyboard('{enter}');

    const editButton = await findByRole('button', { name: 'Edit' });
    await userEvent.click(editButton);

    const editInput = getByLabelText('Edit Book Title');
    await userEvent.type(editInput, ' Edited');

    // Act
    await userEvent.keyboard('{enter}');

    // Assert
    waitForElementToBeRemoved(() => queryByText('New Book Title'));
    waitFor(() => expect(queryByText('New Book Title Edited')).toBeInTheDocument());
  });
});

function makeComponent() {
  return render(
  <Provider booksApi={booksApi}>
      <App />
  </Provider>
  );
}