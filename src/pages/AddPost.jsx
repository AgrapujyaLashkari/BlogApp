// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function AddPost() {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically handle adding the post to your backend
//     console.log('New post:', { title, content });
//     // For demo purposes, we'll just redirect to home
//     navigate('/');
//   };

//   return (
//     <div className="max-w-2xl mx-auto">
//       <h1 className="text-3xl font-bold mb-4">Add New Post</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="title" className="block mb-1">Title</label>
//           <input
//             type="text"
//             id="title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//             className="w-full px-3 py-2 border rounded-md"
//           />
//         </div>
//         <div>
//           <label htmlFor="content" className="block mb-1">Content</label>
//           <textarea
//             id="content"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             required
//             rows="10"
//             className="w-full px-3 py-2 border rounded-md"
//           ></textarea>
//         </div>
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
//           Add Post
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddPost;




import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

function AddPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle adding the post to your backend
    console.log('New post:', { title, content });
    // For demo purposes, we'll just redirect to home
    navigate('/');
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    navigate('/');
    return null;
  }

  return (
    // <div className="max-w-2xl mx-auto">
    //   <h1 className="text-3xl font-bold mb-4">Add New Post</h1>
    //   <form onSubmit={handleSubmit} className="space-y-4">
    //     <div>
    //       <label htmlFor="title" className="block mb-1">Title</label>
    //       <Input
    //         type="text"
    //         id="title"
    //         value={title}
    //         onChange={(e) => setTitle(e.target.value)}
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="content" className="block mb-1">Content</label>
    //       <textarea
    //         id="content"
    //         value={content}
    //         onChange={(e) => setContent(e.target.value)}
    //         required
    //         rows="10"
    //       />
    //     </div>
    //     <Button type="submit">Add Post</Button>
    //   </form>
    // </div>
    <div>
      
    </div>
  );
}

export default AddPost;