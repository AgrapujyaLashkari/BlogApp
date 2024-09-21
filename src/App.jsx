import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BlogDetail from './pages/BlogDetail';
import AddPost from './pages/AddPost';
import SearchBar from './component/SearchBar';
import CategoryFilter from './component/CategoryFilter';
import Footer from './pages/Footer';


// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };

//   const handleSearch = (term) => {
//     setSearchTerm(term);
//   };

//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category);
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <Router>
//       <div className="App flex flex-col min-h-screen">
//         <header className="bg-white shadow-sm">
//           <nav className="container mx-auto px-4 py-4">
//             <div className="flex justify-between items-center">
//               <Link to="/" className="text-2xl font-bold text-gray-800">
//                 Modern Blog
//               </Link>
//               <button
//                 className="md:hidden text-gray-600 focus:outline-none"
//                 onClick={toggleMenu}
//               >
//                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               </button>
//             </div>
//             <div className={`md:flex items-center justify-between mt-4 md:mt-0 ${isMenuOpen ? 'block' : 'hidden'}`}>
//               <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
//                 <SearchBar onSearch={handleSearch} />
//                 <CategoryFilter onCategorySelect={handleCategorySelect} />
//               </div>
//               <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0 space-y-4 md:space-y-0 md:space-x-4">
//                 {isLoggedIn ? (
//                   <>
//                     <Link to="/add-post" className="text-gray-600 hover:text-gray-800">
//                       Add Post
//                     </Link>
//                     <button onClick={handleLogout} className="text-gray-600 hover:text-gray-800">
//                       Logout
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <Link to="/login" className="text-gray-600 hover:text-gray-800">
//                       Login
//                     </Link>
//                     <Link to="/signup" className="text-gray-600 hover:text-gray-800">
//                       Sign Up
//                     </Link>
//                   </>
//                 )}
//               </div>
//             </div>
//           </nav>
//         </header>
//         <main className="container mx-auto px-4 py-8 flex-grow">
//           <Routes>
//             <Route path="/" element={<Home searchTerm={searchTerm} selectedCategory={selectedCategory} />} />
//             <Route path="/login" element={<Login onLogin={handleLogin} />} />
//             <Route path="/signup" element={<Signup onSignup={handleLogin} />} />
//             <Route path="/post/:id" element={<BlogDetail />} />
//             <Route path="/add-post" element={<AddPost />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;



function Header({ isLoggedIn, handleLogout, handleSearch, handleCategorySelect }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            Modern Blog
          </Link>
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
            <CategoryFilter onCategorySelect={handleCategorySelect} />
          </div>
          <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0 space-y-4 md:space-y-0 md:space-x-4">
            {isLoggedIn ? (
              <>
                <Link to="/add-post" className="text-gray-600 hover:text-gray-800">
                  Add Post
                </Link>
                <button onClick={handleLogout} className="text-gray-600 hover:text-gray-800">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-600 hover:text-gray-800">
                  Login
                </Link>
                <Link to="/signup" className="text-gray-600 hover:text-gray-800">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const HeaderWrapper = () => {
    const location = useLocation();
    const hideHeaderPaths = ['/login', '/signup'];
    
    if (hideHeaderPaths.includes(location.pathname)) {
      return null;
    }

    return (
      <Header
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
        handleSearch={handleSearch}
        handleCategorySelect={handleCategorySelect}
      />
    );
  };

  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <HeaderWrapper />
        <main className="container mx-auto px-4 py-8 flex-grow">
          <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm} selectedCategory={selectedCategory} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup onSignup={handleLogin} />} />
            <Route path="/post/:id" element={<BlogDetail />} />
            <Route path="/add-post" element={<AddPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;