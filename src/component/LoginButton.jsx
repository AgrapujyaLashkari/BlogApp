// import React from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
// import { Button } from '../components/ui/button';

// const LoginButton = () => {
//   const { loginWithRedirect } = useAuth0();

//   return <Button onClick={() => loginWithRedirect()}>Log In</Button>;
// };

// export default LoginButton;


import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@/components/ui/button';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      onClick={() => loginWithRedirect()}
      className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full text-lg hover:bg-blue-100 transition duration-300"
    >
      Login to Read
    </Button>
  );
};

export default LoginButton;