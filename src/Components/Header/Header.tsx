import { useState } from 'react';
import { Link } from 'react-router-dom';

type NavProps = {
  isActive: boolean;
  handleActive: () => void;
};

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const handleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="bg-primary">
      <div className="header-content-wrapper  flex justify-between items-center   bg-orange-500 ">
        <span className="logo">ImperialInferno</span>
        <button onClick={handleActive} aria-label="open">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </button>
        <Nav isActive={isActive} handleActive={handleActive} />
      </div>
    </header>
  );
};

const Nav = ({ isActive, handleActive }: NavProps) => {
  const removeActive = () => {
    handleActive();
  };
  return (
    <nav
      className={`fixed right-0 top-0 w-full bg-primary h-full ${
        isActive
          ? 'translate-x-0 transition-all'
          : 'translate-x-full transition-all'
      }`}
    >
      <div className="navbar-content-wrapper ">
        <div className="h-[5rem] flex items-center justify-end">
          <button onClick={removeActive} aria-label="close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <ul className="h-full w-full  pl-5 pt-5">
          <li className="mt-5 text-xl">
            <Link to="/">Home</Link>
          </li>
          <li className="mt-5 text-xl">
            <Link to="/">Cars</Link>
          </li>
          <li className="mt-5 text-xl">
            <Link to="/">Account</Link>
          </li>
          <li className="mt-5 text-xl">
            <Link to="/">Documentation</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
