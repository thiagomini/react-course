import { Book, updateTitle } from './book';

describe('Books', () => {
  test('update a book title', () => {
    // Arrange
    const book: Book = { id: '1', title: 'The Hobbit' };

    // Act
    const updatedBook = updateTitle(book, 'The Lord of the Rings');

    // Assert
    expect(updatedBook).toEqual({
      id: '1',
      title: 'The Lord of the Rings',
    });
  });
});
