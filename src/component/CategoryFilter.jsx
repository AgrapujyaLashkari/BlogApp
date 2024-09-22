import React, { useState, useRef, useEffect } from 'react';
import blogData from '../api/blogData.json';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Button } from '@/components/ui/button';
  



// function CategoryFilter({ onCategorySelect }) {
//     const [category, setCategory] = useState("All");
//     let data = blogData.data;
//     const categories = ['All', ...new Set(data.map(post => post.category))];
  
//     const handleCategoryChange = (value) => {
//       setCategory(value);
//       onCategorySelect(value === 'All' ? '' : value);
//     };
  
//     return (
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button variant="outline">
//             {category}
//           </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent className="w-56">
//           <DropdownMenuLabel>Filter by Category</DropdownMenuLabel>
//           <DropdownMenuSeparator />
//           <DropdownMenuRadioGroup value={category} onValueChange={handleCategoryChange}>
//             {categories.map((cat) => (
//               <DropdownMenuRadioItem key={cat} value={cat}>{cat}</DropdownMenuRadioItem>
//             ))}
//           </DropdownMenuRadioGroup>
//         </DropdownMenuContent>
//       </DropdownMenu>
//     );
//   }
  
//   export default CategoryFilter;




function CategoryFilter({ onCategorySelect, selectedCategory }) {
    let data = blogData.data
    const categories = ['All', ...new Set(data.map(post => post.category))];
  
    const handleCategoryChange = (value) => {
      onCategorySelect(value === 'All' ? '' : value);
    };
  
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            {selectedCategory || 'All'}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Filter by Category</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={selectedCategory || 'All'} onValueChange={handleCategoryChange}>
            {categories.map((cat) => (
              <DropdownMenuRadioItem key={cat} value={cat}>{cat}</DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
  
  export default CategoryFilter;