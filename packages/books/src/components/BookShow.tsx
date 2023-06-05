import { useState } from 'react';
import { Book } from '../domain/book';

export type BookShowProps = {
  book: Book;
  onDelete?: (bookId: string) => void;
};

function BookShow({ book, onDelete }: BookShowProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(book.id);
    }
  };

  const editComponent = (
    <div>
      <input type="text" value={book.title} onChange={(e) => console.log(e)} />
    </div>
  );

  return (
    <div className="book-show">
      {book.title}
      <div className="actions">
        <button className="edit" onClick={handleEdit} name="Edit">
          Edit
        </button>
        <button className="delete" onClick={handleDelete} name="Delete">
          Delete
        </button>
        {isEditing && editComponent}
      </div>
    </div>
  );
}

export default BookShow;
