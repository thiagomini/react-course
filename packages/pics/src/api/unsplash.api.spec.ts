import { HttpClientSpy } from './test/http-client.spy';
import { UnsplashApi } from './unsplash.api';
import { Image } from '../app/image';

describe('Unsplash API', () => {
  test('requests a list of images for given term', async () => {
    // Arrange
    const httpClientSpy = new HttpClientSpy({
      results: [],
      total: 0,
      total_pages: 0,
    });
    const accessToken = 'access-token';

    const unsplashApi = new UnsplashApi(httpClientSpy, accessToken);

    // Act
    await unsplashApi.searchImages('cats');

    // Assert
    httpClientSpy
      .shouldSendNumberOfRequests(1)
      .withUrl('https://api.unsplash.com/search/photos?query=cats')
      .withMethod('GET')
      .withHeaders({
        Authorization: `Client-ID ${accessToken}`,
      });
  });

  test('returns a list of images for given term', async () => {
    // Arrange
    const httpClientSpy = new HttpClientSpy({
      results: [
        {
          id: '1',
          urls: {
            thumb: 'https://example.com/cat.png',
          },
          alt_description: 'A cat',
        },
        {
          id: '2',
          urls: {
            thumb: 'https://example.com/cat2.png',
          },
          alt_description: 'Another cat',
        },
      ],
      total: 2,
      total_pages: 1,
    });
    const accessToken = 'access-token';

    const unsplashApi = new UnsplashApi(httpClientSpy, accessToken);

    // Act
    const images = await unsplashApi.searchImages('cats');

    // Assert
    expect(images).toEqual([
      Image.create({
        id: '1',
        url: 'https://example.com/cat.png',
        alt: 'image A cat',
      }),
      Image.create({
        id: '2',
        url: 'https://example.com/cat2.png',
        alt: 'image Another cat',
      }),
    ]);
  });
});
