// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { UnsplashApi } from '../api/unsplash.api';
import { HttpClientAxios } from '../api/http-client-axios';
import { environment } from '../environments/environment';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';
import { Image } from '../app/image';
import ImageList from '../components/ImageList';

const api = new UnsplashApi(
  new HttpClientAxios(),
  environment.unsplash.accessToken
);

export type AppProps = {
  unsplashApi?: UnsplashApi;
};

export function App({ unsplashApi = api }: AppProps) {
  const [images, setImages] = useState<Image[]>([]);

  const handleSubmit = async (searchTerm: string) => {
    const images = await unsplashApi.searchImages(searchTerm);
    setImages(images ?? []);
  };

  return (
    <div>
      <h1>Welcome to pics!</h1>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
