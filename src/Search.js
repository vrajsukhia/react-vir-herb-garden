// src/SearchComponent.js
import React, { useState } from 'react';
import { fetchHerbalPlantInfo } from './api';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true); 
    try {
      const result = await fetchHerbalPlantInfo(query);
      setResponse(result); 
    } catch (error) {
      setResponse('Error fetching data.'); 
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a herbal plant..."
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Loading...' : 'Search'}
      </button>
      <div>{response}</div>
    </div>
  );
};

export default SearchComponent;
