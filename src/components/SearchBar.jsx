// SearchBar.jsx
import { useState } from 'react';
import { callApi } from '../services/call-api';
import { animate, stagger, inView } from "motion";
import LoadingCircleSpinner from '../motions/components/loading-circle-spinner';
import { s } from 'motion/react-client';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {

    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      setIsLoading(false);
      alert(`Search completed for query: "${query}"`);
    }, 2000);

    // const res = await callApi(query);

    // if (!res) {
    //   alert('No results found');
    //   return;
    // } else if (res.error) {
    //   alert(`Error: ${res.error}`);
    //   return;
    // } else {
    //   return true 
    // }
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
        {isLoading && <LoadingCircleSpinner />}
      </div>
  );
}