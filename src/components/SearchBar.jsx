// SearchBar.jsx
import { useState } from 'react';
import { callApi } from '../services/call-api';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    const res = await callApi(query);
    console.log(res);
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