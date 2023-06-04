import { useState } from 'react';
import { Book } from '../domain/book';

export type BookCreateProps = {
  handleSubmit: (title: string) => Book;
};

function BookCreate({ handleSubmit }: BookCreateProps) {
  const [title, setTitle] = useState('');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(title);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Enter Book Title</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </form>
    </div>
  );
}

export default BookCreate;
