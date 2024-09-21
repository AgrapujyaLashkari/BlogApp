import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { useState } from 'react';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log({ email, password, confirmPassword });
  };

  return (
    <div className="max-w-md mx-auto p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
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
        <div className="mb-4">
          <label htmlFor="confirm-password" className="block text-sm mb-2">Confirm Password</label>
          <Input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
          />
        </div>
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Signup({ onSignup }) {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically handle the sign-up logic
//     console.log('Sign-up attempt with:', name, email, password);
//     // For demo purposes, we'll just call onSignup and redirect to home
//     onSignup();
//     navigate('/');
//   };

//   return (
//     <div className="max-w-md mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="name" className="block mb-1">Name</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             className="w-full px-3 py-2 border rounded-md"
//           />
//         </div>
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
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Signup;