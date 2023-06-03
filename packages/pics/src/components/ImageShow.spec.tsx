import { render } from '@testing-library/react';
import ImageShow from './ImageShow';
import { Image } from '../app/image';

describe('Image Show', () => {
  test('renders successfully', () => {
    const { baseElement } = makeComponent();
    expect(baseElement).toBeTruthy();
  });

  test('renders an image', () => {
    // Arrange
    const image = Image.create({
      id: '1',
      alt: 'custom alt',
      url: 'https://example.com/image.png',
    });

    // Act
    const { getByAltText } = makeComponent(image);

    // Assert
    expect(getByAltText(image.alt)).toBeTruthy();
  });
});

function makeComponent(image = makeImage()) {
  return render(<ImageShow image={image} />);
}

function makeImage() {
  return Image.create({
    id: '1',
    alt: 'alt',
    url: 'https://example.com/image.jpg',
  });
}
