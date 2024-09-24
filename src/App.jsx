




import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import Home from './pages/Home';
import BlogDetail from './pages/BlogDetail';
import AddPost from './pages/AddPost';
import SearchBar from './component/SearchBar';
import CategoryFilter from './component/CategoryFilter';
import Footer from './pages/Footer';
import LoginButton from './component/LoginButton';
import LogoutButton from './component/LogoutButton';
import Profile from './pages/Profile';
import ComingSoon from './pages/ComingSoon';



// function Header({ handleSearch, handleCategorySelect, selectedCategory }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();
//   const { isAuthenticated, isLoading } = useAuth0();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   if (!isAuthenticated) {
//     return null;
//   }

//   return (
    
//     <header className="bg-white shadow-sm">
//       <nav className="container mx-auto px-4 py-4">
//         <div className="flex justify-between items-center">
//           <button onClick={() => navigate('/')} className="text-2xl font-bold text-gray-800">
//             Modern Blog
//           </button>
//           <button
//             className="md:hidden text-gray-600 focus:outline-none"
//             onClick={toggleMenu}
//           >
//             <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>
//         <div className={`md:flex items-center justify-between mt-4 md:mt-0 ${isMenuOpen ? 'block' : 'hidden'}`}>
//           <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
//             <SearchBar onSearch={handleSearch} />
//             <CategoryFilter onCategorySelect={handleCategorySelect} selectedCategory={selectedCategory} />
//           </div>
//           <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0 space-y-4 md:space-y-0 md:space-x-4">
//             <button onClick={() => navigate('/add-post')} className="text-gray-600 hover:text-gray-800">
//               Add Post
//             </button>
//             <button onClick={() => navigate('/profile')} className="text-gray-600 hover:text-gray-800">
//               Profile
//             </button>
//             <LogoutButton />
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

// function App() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const { isAuthenticated, isLoading } = useAuth0();

//   const handleSearch = (term) => {
//     setSearchTerm(term);
//   };

//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category);
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Auth0Provider
//       domain={import.meta.env.VITE_AUTH0_DOMAIN}
//       clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
//       redirectUri={window.location.origin}
//     >
//     <Router>
//       <div className="App flex flex-col min-h-screen">
//         {isAuthenticated ? (
//           <>
//             <Header
//               handleSearch={handleSearch}
//               handleCategorySelect={handleCategorySelect}
//               selectedCategory={selectedCategory}
//             />
//             <main className="container mx-auto px-4 py-8 flex-grow">
//               <Routes>
//                 <Route path="/" element={<Home searchTerm={searchTerm} selectedCategory={selectedCategory} />} />
//                 <Route path="/post/:id" element={<BlogDetail />} />
//                 <Route path="/add-post" element={<AddPost />} />
//                 <Route path="/profile" element={<Profile />} />
//               </Routes>
//             </main>
//           </>
//         ) : (
//           <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
//             <div className="text-center text-white">
//               <h1 className="text-5xl font-bold mb-8">Modern Blog</h1>
//               <LoginButton />
//             </div>
//           </main>
//         )}
//         {isAuthenticated && <Footer />}
//       </div>
//     </Router>
//     </Auth0Provider>
//   );
// }

// function AuthWrappedApp() {
//   return (
//     <Auth0Provider
//       domain={import.meta.env.VITE_AUTH0_DOMAIN}
//       clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
//       redirectUri={window.location.origin}
//     >
//       <App />
//     </Auth0Provider>
//   );
// }

// export default AuthWrappedApp;


function Header({ handleSearch, handleCategorySelect, selectedCategory }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, isLoading, user } = useAuth0();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <button onClick={() => navigate('/')} className="text-2xl font-bold text-gray-800">
            Modern Blog
          </button>
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className={`md:flex items-center justify-between mt-4 md:mt-0 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <SearchBar onSearch={handleSearch} />
            <CategoryFilter onCategorySelect={handleCategorySelect} selectedCategory={selectedCategory} />
          </div>
          <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0 space-y-4 md:space-y-0 md:space-x-4">
            <button onClick={() => navigate('/add-post')} className="text-gray-600 hover:text-gray-800">
              Add Post
            </button>
            <button onClick={() => navigate('/profile')} className="text-gray-600 hover:text-gray-800">
              {user.email}
            </button>
            <LogoutButton />
          </div>
        </div>
      </nav>
    </header>
  );
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const { isAuthenticated, isLoading } = useAuth0();

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        {isAuthenticated ? (
          <>
            <Header
              handleSearch={handleSearch}
              handleCategorySelect={handleCategorySelect}
              selectedCategory={selectedCategory}
            />
            <main className="container mx-auto px-4 py-8 flex-grow">
              <Routes>
                <Route path="/" element={<Home searchTerm={searchTerm} selectedCategory={selectedCategory} />} />
                <Route path="/post/:id" element={<BlogDetail />} />
                <Route path="/add-post" element={<ComingSoon />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </main>
          </>
        ) : (
          <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-8">Modern Blog</h1>
              <LoginButton />
            </div>
          </main>
        )}
        {isAuthenticated && <Footer />}
      </div>
    </Router>
  );
}

function AuthWrappedApp() {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  );
}

export default AuthWrappedApp;