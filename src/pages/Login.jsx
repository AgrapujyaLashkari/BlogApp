import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password });
  };

  return (
    <div className="max-w-md mx-auto p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm mb-2">Email</label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm mb-2">Password</label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login({ onLogin }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically handle the login logic
//     console.log('Login attempt with:', email, password);
//     // For demo purposes, we'll just call onLogin and redirect to home
//     onLogin();
//     navigate('/');
//   };

//   return (
//     <div className="max-w-md mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Login</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="email" className="block mb-1">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full px-3 py-2 border rounded-md"
//           />
//         </div>
//         <div>
//           <label htmlFor="password" className="block mb-1">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="w-full px-3 py-2 border rounded-md"
//           />
//         </div>
//         <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Login;