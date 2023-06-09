import { render } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import App from './App';
import { HttpClientSpy } from '@react-course/utils';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = makeComponent();
    expect(baseElement).toBeTruthy();
  });

  test('adds a book when the user submits the form', async () => {
    // Arrange
    const { getByLabelText, queryByText, httpClientSpy } = makeComponent();
    const input = getByLabelText('Enter Book Title');
    await userEvent.type(input, 'New Book Title');

    // Act
    await userEvent.keyboard('{enter}');

    // Assert
    expect(queryByText('New Book Title')).toBeInTheDocument();

    httpClientSpy.shouldSendNumberOfRequests(1)
    .withBody({ id: expect.any(String), title: 'New Book Title' })
    .withMethod('POST');
    
  });

  test('deletes a book when the user clicks the delete button', async () => {
    // Arrange
    const { getByLabelText, queryByText, findByRole, httpClientSpy } = makeComponent();
    const input = getByLabelText('Enter Book Title');
    await userEvent.type(input, 'New Book Title');
    await userEvent.keyboard('{enter}');
    httpClientSpy.reset();
    const deleteButton = await findByRole('button', { name: 'Delete' });

    // Act
    await userEvent.click(deleteButton);

    // Assert
    expect(queryByText('New Book Title')).not.toBeInTheDocument();
    httpClientSpy.shouldSendNumberOfRequests(1)
    .withMethod('DELETE');
    
  });

  test('updates a book title when the user edit it and submit the form', async () => {
    // Arrange
    const { getByLabelText, queryByText, findByRole, httpClientSpy } = makeComponent();
    const input = getByLabelText('Enter Book Title');
    await userEvent.type(input, 'New Book Title');
    await userEvent.keyboard('{enter}');
    httpClientSpy.reset()

    const editButton = await findByRole('button', { name: 'Edit' });
    await userEvent.click(editButton);

    const editInput = getByLabelText('Edit Book Title');
    await userEvent.type(editInput, ' Edited');

    // Act
    await userEvent.keyboard('{enter}');

    // Assert
    expect(queryByText('New Book Title')).not.toBeInTheDocument();
    expect(queryByText('New Book Title Edited')).toBeInTheDocument();

    httpClientSpy.shouldSendNumberOfRequests(1)
    .withMethod('PUT')
    .withBody({ title: 'New Book Title Edited' });
    
  });
});

function makeComponent(httpClientSpy: HttpClientSpy = new HttpClientSpy()) {
  const component = render(<App httpClient={httpClientSpy} />);
  return {
    ...component,
    httpClientSpy
  }
}