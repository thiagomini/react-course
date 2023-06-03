import { Image } from './image';

describe('Image', () => {
  test('has an id, url and alt text', () => {
    const image = Image.create({
      id: '1',
      url: 'https://example.com/image.png',
      alt: 'Example image',
    });

    expect(image.id).toBe('1');
    expect(image.url.href).toBe('https://example.com/image.png');
    expect(image.alt).toBe('Example image');
  });
});
