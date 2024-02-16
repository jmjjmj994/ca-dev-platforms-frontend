const Header = () => {
  return (
    <header className="bg-primary  bg-blue-500 ">
      <div className="header-content-wrapper    bg-orange-500 ">
        <span className="logo">ImperialInferno</span>
        <button aria-label="open">
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
      </div>
    </header>
  );
};

const Nav = () => {
  return <nav className="fixed right-0 top-0">navbar</nav>;
};

export default Header;
