import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import blogData from '../api/blogData.json';
import { useAuth0 } from '@auth0/auth0-react';




import LoginButton from '@/component/LoginButton';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';




// function Home({ searchTerm, selectedCategory }) {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [filteredPosts, setFilteredPosts] = useState([]);
//   const postsPerPage = 15;

//   useEffect(() => {
//     let data = blogData.data
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
//             <Card>
//               <CardHeader>
//                 <CardTitle>{post.title}</CardTitle>
//                 <CardDescription>{post.author} • {post.published_date}</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <img
//                   src={post.image}
//                   alt={post.title}
//                   className="w-full h-48 object-cover mb-4 rounded-md"
//                 />
//                 <p className="text-gray-700 line-clamp-3">{post.content}</p>
//               </CardContent>
//               <CardFooter>
//                 <p className="text-sm text-gray-500">{post.reading_time} read</p>
//               </CardFooter>
//             </Card>
//           </Link>
//         ))}
//       </div>
//       <div className="flex flex-wrap justify-center">
//         {Array.from({ length: Math.ceil(filteredPosts.length / postsPerPage) }, (_, i) => (
//           <Button
//             key={i}
//             onClick={() => paginate(i + 1)}
//             className={`mx-1 px-3 py-1 rounded mb-2 ${
//               currentPage === i + 1 ? 'bg-blue-500 text-white' : ' text-white'
//             }`}
//           >
//             {i + 1}
//           </Button>
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
  const { isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    let data = blogData.data;
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {isAuthenticated ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {currentPosts.map((post) => (
              <Link to={`/post/${post.id}`} key={post.id} className="block">
                <Card>
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>{post.author} • {post.published_date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover mb-4 rounded-md"
                    />
                    <p className="text-gray-700 line-clamp-3">{post.content}</p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-gray-500">{post.reading_time} read</p>
                  </CardFooter>
                </Card>
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
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Welcome to Modern Blog</h2>
          <p className="mb-4">Please log in to view and interact with blog posts.</p>
          <LoginButton />
        </div>
      )}
    </div>
  );
}

export default Home;