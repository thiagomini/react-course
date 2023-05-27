import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = makeComponent();
    expect(baseElement).toBeTruthy();
  });

  test('adds an animal', async () => {
    // Arrange
    const { getByText, getAllByAltText } = makeComponent();
    const button = getByText(/Add Animal/);

    // Act
    await userEvent.click(button);

    // Assert
    expect(getAllByAltText(/Animal/)).toHaveLength(1);
  });

  test('adds two animals', async () => {
    // Arrange
    const { getByText, getAllByAltText } = makeComponent();
    const button = getByText(/Add Animal/);

    // Act
    await userEvent.click(button);
    await userEvent.click(button);

    // Assert
    expect(getAllByAltText(/Animal/)).toHaveLength(2);
  });
});

function makeComponent() {
  return render(<App />);
}
