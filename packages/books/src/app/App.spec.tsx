import { render } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  test('adds a book when the user submits the form', async () => {
    // Arrange
    const { getByLabelText, queryByText } = render(<App />);
    const input = getByLabelText('Enter Book Title');
    await userEvent.type(input, 'New Book Title');

    // Act
    await userEvent.keyboard('{enter}');

    // Assert
    expect(queryByText('New Book Title')).toBeInTheDocument();
  });

  test('deletes a book when the user clicks the delete button', async () => {
    // Arrange
    const { getByLabelText, queryByText, findByRole } = render(<App />);
    const input = getByLabelText('Enter Book Title');
    await userEvent.type(input, 'New Book Title');
    await userEvent.keyboard('{enter}');
    const deleteButton = await findByRole('button', { name: 'Delete' });

    // Act
    await userEvent.click(deleteButton);

    // Assert
    expect(queryByText('New Book Title')).not.toBeInTheDocument();
  });

  test('updates a book title when the user edit it and submit the form', async () => {
    // Arrange
    const { getByLabelText, queryByText, findByRole } = render(<App />);
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
    expect(queryByText('New Book Title')).not.toBeInTheDocument();
    expect(queryByText('New Book Title Edited')).toBeInTheDocument();
  });
});
