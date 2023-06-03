import { HttpClientSpy } from './test/http-client.spy';
import { UnsplashApi } from './unsplash.api';

describe('Unsplash API', () => {
  test('requests a list of images for given term', async () => {
    // Arrange
    const httpClientSpy = new HttpClientSpy();
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
});
