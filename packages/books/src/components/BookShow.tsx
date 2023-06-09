import { useState } from 'react';
import { Book } from '../domain/book';
import useBooksContext from '../hooks/use-books-context.hook';
import BookEdit from './BookEdit';

export type BookShowProps = {
  book: Book;
};

function BookShow({ book }: BookShowProps) {
  const { deleteBook, updateBook } = useBooksContext();

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    deleteBook(book.id);
  };

  const handleSubmit = (book: Book) => {
    updateBook(book);
    setIsEditing(false);
  };

  const editComponent = <BookEdit book={book} onEdit={handleSubmit} />;

  const content = isEditing ? editComponent : book.title;

  return (
    <div className="book-show">
      <img
        alt="Book Cover"
        src={`https://picsum.photos/seed/${book.id}/300/200`}
      ></img>
      {content}
      <div className="actions">
        <button className="edit" onClick={handleEdit} name="Edit">
          Edit
        </button>
        <button className="delete" onClick={handleDelete} name="Delete">
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
