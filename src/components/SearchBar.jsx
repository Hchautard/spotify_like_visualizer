// SearchBar.jsx
import { useState } from 'react';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    console.log(`Searching for: ${query}`);
  };

  return (
      <div style={{ display: 'flex', gap: '16px' }}>
        <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch} className="button">
          Search
        </button>
      </div>
  );
}