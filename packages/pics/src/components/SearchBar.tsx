import './SearchBar.css';
import { useState } from 'react';

export type SearchBarProps = {
  onSubmit: (searchTerm: string) => void;
};
function SearchBar({ onSubmit }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents the page from trying to submit a request and reloading the page
    onSubmit(searchTerm);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleOnSubmit}>
        <label>Enter Search Term</label>
        <input
          value={searchTerm}
          type="text"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchBar;
