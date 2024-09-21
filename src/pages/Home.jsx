import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import blogData from '../api/blogData.json';

// function Home({ searchTerm, selectedCategory }) {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [filteredPosts, setFilteredPosts] = useState([]);
//   const postsPerPage = 15;

//   useEffect(() => {
//     let data = blogData.data;
//     const filtered = data.filter(post =>
//       post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
//       (selectedCategory === '' || post.category === selectedCategory)
//     );
//     setFilteredPosts(filtered);
//     setCurrentPage(1);
//   }, [searchTerm, selectedCategory]);

//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
//         {currentPosts.map((post) => (
//           <Link to={`/post/${post.id}`} key={post.id} className="block">
//             <div className="bg-white rounded-lg shadow-md overflow-hidden">
//               <img
//                 src={post.image}
//                 alt={post.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
//                 <p className="text-gray-600 mb-2">{post.author} • {post.published_date}</p>
//                 <p className="text-gray-700 line-clamp-3">{post.content}</p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//       <div className="flex justify-center">
//         {Array.from({ length: Math.ceil(filteredPosts.length / postsPerPage) }, (_, i) => (
//           <button
//             key={i}
//             onClick={() => paginate(i + 1)}
//             className={`mx-1 px-3 py-1 rounded ${
//               currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
//             }`}
//           >
//             {i + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;




function Home({ searchTerm, selectedCategory }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const postsPerPage = 15;

  useEffect(() => {
    let data = blogData.data
    const filtered = data.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === '' || post.category === selectedCategory)
    );
    setFilteredPosts(filtered);
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {currentPosts.map((post) => (
          <Link to={`/post/${post.id}`} key={post.id} className="block">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-2">{post.author} • {post.published_date}</p>
                <p className="text-gray-700 line-clamp-3">{post.content}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex flex-wrap justify-center">
        {Array.from({ length: Math.ceil(filteredPosts.length / postsPerPage) }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`mx-1 px-3 py-1 rounded mb-2 ${
              currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;