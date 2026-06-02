import React from "react";
import Logo from "../Elements/Logo";

function AuthLayout(props) {
  const { children } = props;

  return (
    <main className="min-h-screen bg-special-mainBg flex justify-center items-center font-poppins">
      <div className="bg-special-mainBg w-full max-w-sm px-8 py-10">
        <Logo />
        {children}
      </div>
    </main>
  );
}

export default AuthLayout;