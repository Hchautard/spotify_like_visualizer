// SearchBar.jsx
import { useState, useEffect } from 'react';
import { callApi } from '../services/call-api';
import LoadingCircleSpinner from '../motions/components/loading-circle-spinner';
import { motion } from "motion/react"

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [targetY, setTargetY] = useState(0);

  useEffect(() => {
    const windowMidHeight = window.innerHeight / 2;
    setTargetY(-(windowMidHeight - 100));
  }, []);

  const handleSearch = async () => {
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      setIsLoading(false);
      setHasSearched(true);
          window.dispatchEvent(new CustomEvent('searchComplete'));

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
    <motion.div
      animate={hasSearched ? { y: targetY } : { y: 0 }}
      transition={{
        duration: 1.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      style={{ display: 'flex', gap: '16px', alignItems: 'center', height: '40px' }}
    >
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
    </motion.div>
  );
}
