import { useState } from 'react';

export type BookCreateProps = {
  handleSubmit: (title: string) => unknown;
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
        <label htmlFor="bookTitle">Enter Book Title</label>
        <input
          type="text"
          value={title}
          id="bookTitle"
          onChange={(event) => setTitle(event.target.value)}
        />
      </form>
    </div>
  );
}

export default BookCreate;
