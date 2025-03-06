import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>

      <div className="flex-none space-x-4">
        <Link to="/" className="btn btn-sm gap-2 transition-colors">
          <span className="hidden sm:inline">Hero</span>
        </Link>
      
        <Link to="/projects" className="btn btn-sm gap-2 transition-colors">
          <span className="hidden sm:inline">Projects</span>
        </Link>
        <Link to="/contact" className="btn btn-sm gap-2 transition-colors">
          <span className="hidden sm:inline">Contact</span>
        </Link>

        <button className="btn btn-square btn-ghost">
          <svg
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;
