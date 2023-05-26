import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  test('adds an animal', async () => {
    // Arrange
    const { getByText, getAllByAltText } = render(<App />);
    const button = getByText(/Add Animal/);

    // Act
    await userEvent.click(button);

    // Assert
    await expect(getAllByAltText(/Animal/gi)).toHaveLength(1);
  });
});
