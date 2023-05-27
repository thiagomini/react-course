import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import heart from '../assets/heart.svg';
import Heart from './heart';

describe('Heart', () => {
  it('should render successfully', () => {
    const { baseElement } = makeComponent();

    expect(baseElement).toBeTruthy();
  });

  test('displays a heart image', () => {
    // Arrange
    const { getByAltText } = makeComponent();

    // Assert
    const displayedImage = getByAltText(/Heart/) as HTMLImageElement;
    expect(displayedImage?.src).toContain(heart);
  });

  test('displays a bigger heart image on click', async () => {
    // Arrange
    const { getByAltText } = makeComponent();
    const displayedImage = getByAltText(/Heart/) as HTMLImageElement;
    const previousSize = displayedImage?.width;

    // Act
    await userEvent.click(displayedImage);

    // Assert
    expect(displayedImage?.width).toBeGreaterThan(previousSize);
  });
});

function makeComponent() {
  return render(<Heart />);
}
