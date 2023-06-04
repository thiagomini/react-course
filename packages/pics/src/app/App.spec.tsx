import { render } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { HttpClientSpy } from '../api/test/http-client.spy';
import { cats } from '../api/test/unsplash-example-response';
import { UnsplashApi, UnsplashResponse } from '../api/unsplash.api';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Welcome/)).toBeTruthy();
  });

  test('renders a list of images when the user searches for something', async () => {
    // Arrange
    const stubbedResponse: UnsplashResponse = {
      results: cats,
      total: 10,
      total_pages: 1,
    };
    const httpClient = new HttpClientSpy(stubbedResponse);
    const unsplashApi = new UnsplashApi(httpClient, 'fake-token');

    const { getAllByAltText, getByRole } = render(
      <App unsplashApi={unsplashApi} />
    );

    // Act
    const input = getByRole('textbox');
    await userEvent.type(input, 'cats');
    await userEvent.keyboard('{enter}');

    // Assert
    const images = getAllByAltText(/image/i);
    expect(images.length).toBe(cats.length);
  });
});
