import { render } from '@testing-library/react';
import AnimalShow, { AnimalShowProps } from './animal-show';
import userEvent from '@testing-library/user-event';

describe('Animal Show', () => {
  it('should render successfully', () => {
    const { baseElement } = makeComponent();
    expect(baseElement).toBeTruthy();
  });

  it('has an animal image', () => {
    const { getByAltText } = makeComponent();

    expect(getByAltText(/Animal/)).toBeTruthy();
  });

  it('displays the given animal type', () => {
    const { getByAltText } = makeComponent({ type: 'cat' });

    expect(getByAltText(/Animal cat/)).toBeTruthy();
  });

  test('displays a bigger heart image on click', async () => {
    // Arrange
    const { getByAltText } = makeComponent();
    const animalImage = getByAltText(/Animal/) as HTMLImageElement;
    const heartImage = getByAltText(/Heart/) as HTMLImageElement;
    const previousSize = heartImage?.width;

    // Act
    await userEvent.click(animalImage);

    // Assert
    expect(heartImage?.width).toBeGreaterThan(previousSize);
  });
});

function makeComponent(props: AnimalShowProps = { type: 'dog' }) {
  return render(<AnimalShow {...props} />);
}
