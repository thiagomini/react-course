import { render } from '@testing-library/react';
import SearchBar from './SearchBar';
import userEvent from '@testing-library/user-event';

describe('Search Bar', () => {
  test('renders successfully', () => {
    const { baseElement } = makeComponent();
    expect(baseElement).toBeTruthy();
  });

  test('executes onSubmit callback with the search term when the user presses the button', async () => {
    // Arrange
    const mockFn = jest.fn();
    const { getByRole } = makeComponent(mockFn);
    const input = getByRole('textbox');

    // Act
    await userEvent.type(input, 'search term');
    await userEvent.keyboard('{enter}');

    // Assert
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith('search term');
  });
});

function makeComponent(onSubmit: (searchTerm: string) => void = jest.fn()) {
  return render(<SearchBar onSubmit={onSubmit} />);
}
