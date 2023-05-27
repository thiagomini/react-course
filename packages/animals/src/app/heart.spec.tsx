import { render } from '@testing-library/react';
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
});

function makeComponent() {
  return render(<Heart />);
}
