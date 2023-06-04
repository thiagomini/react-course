import { useState } from 'react';

export type BookCreateProps = {
  handleSubmit: (title: string) => unknown;
};

function BookCreate({ handleSubmit }: BookCreateProps) {
  const [title, setTitle] = useState('');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(title);
    setTitle('');
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="bookTitle">Enter Book Title</label>
        <input
          className="input"
          type="text"
          value={title}
          id="bookTitle"
          onChange={(event) => setTitle(event.target.value)}
        />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
