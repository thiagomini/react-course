// * Should send a request to the Unsplash API: GET https://api.unsplash.com/search/photos?query=SEARCH_TERM
// * Headers => Authorization: 'Client-ID YOUR_ACCESS_KEY'

import { useState } from 'react';

export type SearchBarProps = {
  onSubmit: (searchTerm: string) => void;
};
function SearchBar({ onSubmit }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <input
        type="text"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button onClick={() => onSubmit(searchTerm)}>Search</button>
    </div>
  );
}

export default SearchBar;
