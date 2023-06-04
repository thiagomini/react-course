import { Book } from '../domain/book';

export type BookShowProps = {
  book: Book;
  onDelete?: (bookId: string) => void;
};

function BookShow({ book, onDelete }: BookShowProps) {
  const handleClick = () => {
    if (onDelete) {
      onDelete(book.id);
    }
  };

  return (
    <div className="book-show">
      {book.title}
      <div className="actions">
        <button className="delete" onClick={handleClick} name="Delete">
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
