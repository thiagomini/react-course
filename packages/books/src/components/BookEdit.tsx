import React, { useState } from 'react';
import { Book } from '../domain/book';

export type BookEditProps = {
  book: Book;
  onEdit: (book: Book) => unknown;
};

function BookEdit({ book, onEdit }: BookEditProps) {
  const [title, setTitle] = useState(book.title);

  const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    onEdit({
      id: book.id,
      title,
    });
  };

  return (
    <div className="book-edit">
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="button is-primary">Save</button>
      </form>
    </div>
  );
}

export default BookEdit;
