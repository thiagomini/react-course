import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown', () => {
  test('should render', () => {
    // Arrange
    const options = [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
    ];

    // Act
    render(<Dropdown options={options} />);

    // Assert
    expect(
      screen.getByRole('combobox', {
        name: /dropdown/i,
      })
    ).toBeInTheDocument();
  });
});
