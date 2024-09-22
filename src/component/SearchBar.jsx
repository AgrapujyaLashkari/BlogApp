import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-auto">
      <input
        type="text"
        placeholder="Search blogs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full md:w-64 px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      <Button type="submit" className='text-white px-4 py-2 rounded-r-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500'>Search</Button>
      {/* <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button> */}
    </form>
  );
}

export default SearchBar;