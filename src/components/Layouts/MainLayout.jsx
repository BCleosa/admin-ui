import React from "react";
import Logo from "../Elements/Logo";
import Input from "../Elements/Input";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Icon from "../Elements/Icon";
import { NavLink } from "react-router-dom";

function MainLayout(props) {
  const { children } = props;

  const menu = [
    { id: 1, name: "Overview", icon: <Icon.Overview />, link: "/" },
    { id: 2, name: "Balances", icon: <Icon.Balance />, link: "/balance" },
    { id: 3, name: "Transaction", icon: <Icon.Transaction />, link: "/transaction" },
    { id: 4, name: "Bills", icon: <Icon.Bill />, link: "/bill" },
    { id: 5, name: "Expenses", icon: <Icon.Expense />, link: "/expense" },
    { id: 6, name: "Goals", icon: <Icon.Goal />, link: "/goal" },
    { id: 7, name: "Settings", icon: <Icon.Setting />, link: "/setting" },
  ];

  return (
    <>
      <div className="flex min-h-screen">

        {/* Sidebar */}
        <aside className="bg-gray-900 w-28 sm:w-64 text-gray-300 flex flex-col justify-between px-5 py-10">

          {/* Top */}
          <div>

            <div className="mb-8 hidden sm:block">
              <Logo variant="secondary" />
            </div>

            <nav className="flex flex-col gap-1 mt-4">

              {menu.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.link}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3 rounded-md transition-all duration-200
                    ${
                      isActive
                        ? "bg-primary text-white font-bold"
                        : "hover:bg-special-bg3 hover:text-white hover:font-bold hover:scale-105"
                    }`
                  }
                >

                  <div className="mx-auto sm:mx-0">
                    {item.icon}
                  </div>

                  <div className="ms-3 hidden sm:block">
                    {item.name}
                  </div>

                </NavLink>
              ))}

            </nav>

          </div>

          {/* Bottom */}
          <div>

            <div className="flex items-center bg-gray-700 text-white px-4 py-3 rounded-md cursor-pointer">

              <div className="mx-auto sm:mx-0">
                <Icon.Logout />
              </div>

              <div className="ms-3 hidden sm:block">
                Logout
              </div>

            </div>

            <div className="border-t border-gray-600 my-6"></div>

            <div className="flex justify-between items-center gap-2">

              <div>
                Avatar
              </div>

              <div className="hidden sm:block text-sm">

                <div className="font-semibold text-white">
                  Username
                </div>

                <div className="text-gray-400 text-xs">
                  View Profile
                </div>

              </div>

              <div className="hidden sm:block text-gray-400 text-xs">
                <Icon.Detail size={15} />
              </div>

            </div>

          </div>

        </aside>

        {/* Right Content */}
        <div className="bg-gray-100 flex-1 flex flex-col">

          <header className="border-b border-gray-200 px-6 py-5 flex justify-between items-center bg-white">

            <div className="flex items-center gap-4">

              <div className="font-bold text-2xl text-gray-800">
                Username
              </div>

              <div className="text-gray-400 flex items-center">

                <Icon.ChevronRight size={20} />

                <span>
                  May 19, 2023
                </span>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <div className="me-10">
                <NotificationsIcon className="text-gray-500 scale-110" />
              </div>

              <Input
                backgroundColor="bg-gray-100"
                border="border-gray-200"
                placeholder="Search here"
              />

            </div>

          </header>

          <main className="flex-1 px-6 py-4">
            {children}
          </main>

        </div>

      </div>
    </>
  );
}

export default MainLayout;