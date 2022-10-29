import React, { Dispatch, SetStateAction } from 'react';

interface Props {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

const SignInSidebar = ({ show, setShow }: Props) => {
  return (
    <>
      {show && (
        <div
          className="w-80 h-screen bg-white fixed top-0 right-0 cursor-pointer"
          onClick={() => setShow(false)}
        >
          close
        </div>
      )}
    </>
  );
};

export default SignInSidebar;
