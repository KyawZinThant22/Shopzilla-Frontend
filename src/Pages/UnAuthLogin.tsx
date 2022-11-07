import React from 'react';
import LoginPage from './LoginPage';

const UnAuthLogin = () => {
  return (
    <div className="w-[500px] mx-auto flex h-screen items-center flex-col justify-center">
      <LoginPage />
      <div className="mt-12">
        <h1>email : admin@gmail.com</h1>
        <h1>password : admin&Ap3jRRN^&sGKn6h</h1>
      </div>
    </div>
  );
};

export default UnAuthLogin;
