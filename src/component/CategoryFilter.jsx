import React, { useState, useRef, useEffect } from 'react';
import blogData from '../api/blogData.json';

// function CategoryFilter({ onCategorySelect }) {
//     let data = blogData.data;
//   const categories = ['All', ...new Set(data.map(post => post.category))];

//   return (
//     <select
//       onChange={(e) => onCategorySelect(e.target.value === 'All' ? '' : e.target.value)}
//       className="w-full md:w-auto px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//     >
//       {categories.map(category => (
//         <option key={category} value={category}>
//           {category}
//         </option>
//       ))}
//     </select>
//   );
// }

// export default CategoryFilter;



// import React, { useState, useRef, useEffect } from 'react';
// import blogData from '../data/blogData.json';

function CategoryFilter({ onCategorySelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const dropdownRef = useRef(null);
  let data = blogData.data
  const categories = ['All', ...new Set(data.map(post => post.category))];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category === 'All' ? '' : category);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full md:w-auto px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
      >
        {selectedCategory}
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleSelect(category)}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              {category}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryFilter;