// * Should send a request to the Unsplash API: GET https://api.unsplash.com/search/photos?query=SEARCH_TERM
// * Headers => Authorization: 'Client-ID YOUR_ACCESS_KEY'

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
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          value={searchTerm}
          type="text"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
