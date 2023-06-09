import { render, waitFor, waitForElementToBeRemoved } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import App from './App';
import { HttpClientAxios } from '@react-course/utils';
import { BooksApi } from '../data/books.api';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = makeComponent();
    expect(baseElement).toBeTruthy();
  });

  test('adds a book when the user submits the form', async () => {
    // Arrange
    const { getByLabelText, queryByText } = makeComponent();
    const input = getByLabelText('Enter Book Title');
    await userEvent.type(input, 'New Book Title');

    // Act
    await userEvent.keyboard('{enter}');

    // Assert
    await waitFor(() => queryByText('New Book Title'));
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
    waitFor(() => queryByText('New Book Title Edited'));
  });
});

function makeComponent() {
  const booksApi = new BooksApi(new HttpClientAxios());

  return render(<App booksApi={booksApi} />);
}