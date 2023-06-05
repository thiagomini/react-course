import React, { useState } from 'react';
import { Book } from '../domain/book';
import BookEdit from './BookEdit';

export type BookShowProps = {
  book: Book;
  onDelete?: (bookId: string) => void;
  onEdit: (book: Book) => unknown;
};

function BookShow({ book, onDelete, onEdit }: BookShowProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(book.id);
    }
  };

  const editComponent = <BookEdit book={book} onEdit={onEdit} />;

  const content = isEditing ? editComponent : book.title;

  return (
    <div className="book-show">
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
