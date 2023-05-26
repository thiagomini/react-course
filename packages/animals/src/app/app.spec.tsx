import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = makeComponent();
    expect(baseElement).toBeTruthy();
  });

  test('adds an animal', async () => {
    // Arrange
    makeComponent();

    // Act
    await dsl.animal.add();

    // Assert
    await dsl.animal.shouldBeVisible();
  });
});

function makeComponent() {
  return render(<App />);
}

const dsl = {
  animal: {
    async add() {
      const button = screen.getByText(/Add Animal/);
      await userEvent.click(button);
    },

    async shouldBeVisible() {
      await expect(screen.getAllByAltText(/Animal/gi)).toHaveLength(1);
    },
  },
};
