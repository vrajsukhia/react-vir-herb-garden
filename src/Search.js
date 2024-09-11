// src/SearchComponent.js
import React, { useState } from 'react';
import { fetchHerbalPlantInfo } from './api';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true); // Set loading state to true
    try {
      const result = await fetchHerbalPlantInfo(query);
      setResponse(result); // Set the response to display
    } catch (error) {
      setResponse('Error fetching data.'); // Handle error
    } finally {
      setLoading(false); // Set loading state to false
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
