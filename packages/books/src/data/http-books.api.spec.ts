import { HttpClientSpy } from "@react-course/utils";
import { HttpBooksApi } from './http-books.api';
import { createBook } from "../domain/book";

describe('Http Books API', () => {
  test('creates a new book', async () => {
    // Arrange
    const httpClient = new HttpClientSpy();
    const booksApi = new HttpBooksApi(httpClient);

    // Act
    await booksApi.create('The Lord of the Rings');

    // Assert
    httpClient.shouldSendNumberOfRequests(1)
    .withMethod('POST')
    .withUrl('http://localhost:3001/books')
    .withBody({ title: 'The Lord of the Rings', id: expect.any(String) });
  })

  test('updates an existing book', async () => {
    // Arrange
    const httpClient = new HttpClientSpy();
    const booksApi = new HttpBooksApi(httpClient);

    // Act
    await booksApi.updateById('1', 'The Lord of the Rings');

    // Assert
    httpClient.shouldSendNumberOfRequests(1)
    .withMethod('PUT')
    .withUrl('http://localhost:3001/books/1')
    .withBody({ title: 'The Lord of the Rings' });
  })

  test('deletes an existing book by id', async () => {
    // Arrange
    const httpClient = new HttpClientSpy();
    const booksApi = new HttpBooksApi(httpClient);

    // Act
    await booksApi.deleteById('1');

    // Assert
    httpClient.shouldSendNumberOfRequests(1)
    .withMethod('DELETE')
    .withUrl('http://localhost:3001/books/1');
  })

  test('fetches all books', async () => {
    // Arrange
    const httpClient = new HttpClientSpy();
    httpClient.setResponse([
      createBook('Book 1'),
      createBook('Book 2'),
    ])
    const booksApi = new HttpBooksApi(httpClient);

    // Act
    await booksApi.getAll();

    // Assert
    httpClient.shouldSendNumberOfRequests(1)
    .withMethod('GET')
    .withUrl('http://localhost:3001/books');
  })
});