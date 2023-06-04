import { HttpClient } from './http-client.interface';
import { Image } from '../app/image';

export type UnsplashImage = {
  id: string;
  urls: {
    regular: string;
    thumb: string;
  };
  alt_description: string;
};

export type UnsplashResponse = {
  results: UnsplashImage[];
  total: number;
  total_pages: number;
};

export class UnsplashApi {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly accessToken: string
  ) {}
  async searchImages(term: string) {
    const response = await this.httpClient.send<UnsplashResponse>({
      url: `https://api.unsplash.com/search/photos?query=${term}`,
      method: 'GET',
      headers: {
        Authorization: `Client-ID ${this.accessToken}`,
      },
    });

    return response.body?.results.map((result: UnsplashImage) =>
      Image.create({
        id: result.id,
        url: result.urls.thumb,
        alt: `image ${result.alt_description}`,
      })
    );
  }
}
