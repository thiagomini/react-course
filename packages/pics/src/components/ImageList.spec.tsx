import { render } from '@testing-library/react';
import { Image } from '../app/image';
import ImageList, { ImageListProps } from './ImageList';

describe('ImageList', () => {
  test('renders a list of images', () => {
    // Arrange
    const images = [
      Image.create({
        id: '1',
        alt: 'alt 1',
        url: 'https://picsum.photos/id/1/200/300',
      }),
      Image.create({
        id: '2',
        alt: 'alt 2',
        url: 'https://picsum.photos/id/2/200/300',
      }),
    ];
    // Act
    const { getByAltText } = makeComponent({ images });

    // Assert
    expect(getByAltText('alt 1')).toBeInTheDocument();
    expect(getByAltText('alt 2')).toBeInTheDocument();
  });
});

function makeComponent(imageListProps: ImageListProps) {
  return render(<ImageList {...imageListProps} />);
}
