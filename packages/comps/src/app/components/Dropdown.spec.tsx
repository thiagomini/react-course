import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';
import userEvent from '@testing-library/user-event';

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

  test('selects a value', async () => {
    // Arrange
    const options = [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
    ];
    render(<Dropdown options={options} />);
    const dropdown = screen.getByRole('combobox', {
      name: /dropdown/i,
    });

    // Act
    await userEvent.selectOptions(dropdown, '2');

    // Assert
    expect(dropdown).toHaveValue('2');
  });
});
