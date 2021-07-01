import React from "react";
import Auth from "../../utils/auth";
import logo from "../assets/logo.png";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="lg:flex flex-grow items-center">
          <ul className="flex flex-col lg:flex-row list-none ml-auto">
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="/"
                onClick={() => Auth.logout()}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="lg:flex flex-grow items-center">
          <ul className="flex flex-col lg:flex-row list-none ml-auto">
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="/signup"
              >
                Signup
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="/login"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      );
    }
  }

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-900 mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
          <a className="inline-block mr-4 py-2" href="/">
            <img className="h-8 inline" src={logo} alt="logo" />
          </a>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
          >
            <span className="block relative w-6 h-px rounded-sm bg-white"></span>
            <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
          </button>
        </div>
        <div className="text-white">{showNavigation()}</div>
      </div>
    </nav>
  );
}

export default Nav;
