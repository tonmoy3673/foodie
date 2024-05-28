import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const mobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="navbar bg-base-100 py-6 relative">
        <div className="flex-1">
          <h2 className="text-4xl cursor-pointer font-bold text-[#880769] hover:text-warning">
            <Link to="/">Foodie</Link>
          </h2>
        </div>
        <div className="md:hidden">
        <div className="w-10 rounded-full mr-8">
                  <img
                    className="rounded-full cursor-pointer"
                    alt="User Avatar"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
          </div>
          <button
            onClick={mobileMenu}
            className="text-white focus:outline-none"
          >
            {/* Icon for mobile menu */}
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        {/* Desktop menu */}
        <div
          className={`md:flex flex-grow justify-end items-center space-x-4 hidden`}
        >
          <div className="flex md:flex-row space-x-0 md:space-x-4">
            <Link
              to="/home"
              className="text-center text-base md:text-lg font-semibold text-[#880769] hover:text-warning"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-center text-base md:text-lg font-semibold text-[#880769] hover:text-warning"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/feedback"
              className="text-center text-base md:text-lg font-semibold text-[#880769] hover:text-warning"
              onClick={() => setIsOpen(false)}
            >
              Feedback
            </Link>

            {user?.uid ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-center text-base md:text-lg font-semibold text-[#880769] hover:text-warning"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="hover:bg-warning py-2 px-4 rounded-xl font-semibold bg-[#880769] text-white"
                >
                  Log Out
                </button>
                <div className="w-10 rounded-full ml-8 hidden md:block">
                  <img
                    className="rounded-full cursor-pointer"
                    alt="User Avatar"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-center text-base md:text-lg font-semibold text-[#880769] hover:text-warning"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-center text-base md:text-lg font-semibold text-[#880769] hover:text-warning"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>

{/* Mobile menu */}
        <div
          className={`${
            isOpen ? "absolute block top-24 z-50 w-full bg-black text-white" : "hidden"
          }  md:hidden`}
        >
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
            <Link
              to="/home"
              className="text-center text-base md:text-lg font-semibold text-[#880769] hover:text-warning"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-center text-base md:text-lg font-semibold text-[#880769] hover:text-warning"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/feedback"
              className="text-center text-base md:text-lg font-semibold text-[#880769] hover:text-warning"
              onClick={() => setIsOpen(false)}
            >
              Feedback
            </Link>

            {user?.uid ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-center text-base md:text-lg font-semibold text-[#880769] hover:text-warning"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="hover:bg-warning py-2 px-4 rounded-xl font-semibold bg-[#880769] text-white"
                >
                  Log Out
                </button>
                <div className="w-10 rounded-full ml-8 hidden md:block">
                  <img
                    className="rounded-full cursor-pointer"
                    alt="User Avatar"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-center text-base md:text-lg font-semibold text-[#880769] hover:text-warning"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-center text-base md:text-lg font-semibold text-[#880769] hover:text-warning"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
