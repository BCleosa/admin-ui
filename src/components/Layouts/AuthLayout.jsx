import React, { useContext } from "react";
import Logo from "../Elements/Logo";
import { ThemeContext } from "../../context/themeContext";
import { DarkModeContext } from "../../context/darkModeContext";

function AuthLayout(props) {
  const { children, title } = props;
  const { theme } = useContext(ThemeContext);
  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      <main
        className={`min-h-screen bg-special-mainBg dark:bg-[#2e2e2e] flex justify-center items-center p-4 ${theme.name} ${darkMode ? "dark" : ""}`}
      >
        <div className="w-full max-w-100">
          <div className="mb-8 flex justify-center">
            <Logo />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            {title}
          </h1>

          {children}
        </div>
      </main>
    </>
  );
}

export default AuthLayout;