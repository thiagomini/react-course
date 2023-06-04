import { render } from '@testing-library/react';

import App from './App';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  test('adds a book when the user submits the form', async () => {
    // Arrange
    const { getByLabelText, findByText } = render(<App />);
    const input = getByLabelText('Enter Book Title');
    await userEvent.type(input, 'New Book Title');

    // Act
    await userEvent.keyboard('{enter}');

    // Assert
    await findByText('New Book Title');
  });
});
