import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { user } = useSelector((state) => state.userSlice);
  // console.log(user);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <header className="bg-white text-black font-bold">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <NavLink
              className={({ isActive, isPending }) => {
                return isActive ? "text-red-500" : "";
              }}
              to={"/"}
            >
              Trang chủ
            </NavLink>
            <NavLink to={"/cum-rap"}>Cụm rạp</NavLink>
            <NavLink to={"/"}>Tin tức</NavLink>
            <NavLink
              className={({ isActive, isPending }) => {
                // console.log(isActive);
                return isActive ? "text-red-500" : "";
              }}
              to={"/ung-dung"}
            >
              Ứng dụng
            </NavLink>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
            {/* nếu người dùng dang nhap rôi hiển thị tên */}
            {user ? (
              <p>{user.hoTen}</p>
            ) : (
              <NavLink
                to={"/login"}
                className="text-sm font-bold leading-6 text-gray-900"
              >
                Log in <span aria-hidden="true">→</span>
              </NavLink>
            )}
          </div>
        </nav>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } lg:hidden fixed inset-0 z-10`}
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company Logo"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">{/* ... */}</div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
