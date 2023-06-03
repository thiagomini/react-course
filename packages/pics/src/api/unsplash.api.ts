import { HttpClient } from './http-client.interface';

export class UnsplashApi {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly accessToken: string
  ) {}
  async searchImages(term: string) {
    const response = await this.httpClient.send({
      url: `https://api.unsplash.com/search/photos?query=${term}`,
      method: 'GET',
      headers: {
        Authorization: `Client-ID ${this.accessToken}`,
      },
    });

    return response.body;
  }
}
