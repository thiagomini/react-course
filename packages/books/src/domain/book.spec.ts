import { Book, createBook, deleteBookById, updateTitle } from './book';

describe('Books', () => {
  test('create a book', () => {
    // Act
    const newBook = createBook('The Hobbit');

    // Assert
    expect(newBook).toEqual({
      id: expect.any(String),
      title: 'The Hobbit',
    });
  });

  test('create a book with unique id', () => {
    // Arrange
    const firstBook = createBook('The Hobbit');

    // Act
    const secondBook = createBook('The Lord of the Rings');

    // Assert
    expect(firstBook.id).not.toBe(secondBook.id);
  });

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

  test('delete a book by id', () => {
    // Arrange
    const books = [
      createBook('The Hobbit'),
      createBook('The Lord of the Rings'),
    ];

    // Act
    const updatedBooks = deleteBookById(books, books[0].id);

    // Assert
    expect(updatedBooks).toEqual([books[1]]);
  });
});
