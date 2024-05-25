import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100 py-6">
        <div className="flex-1">
          <h2 className="text-4xl cursor-pointer font-bold"><Link to='/'>Foodie</Link></h2>
        </div>
        <div className="flex-none gap-2">
          <div className="flex gap-10">
          <Link to='/home' className="text-center text-base md:text-lg font-semibold">Home</Link>
            <Link to='/about' className="text-center text-base md:text-lg font-semibold">About</Link>
            <Link to='/feedback' className="text-center text-base md:text-lg font-semibold">Feedback</Link>
            <Link to='/login' className="text-center text-base md:text-lg font-semibold">Login</Link>
            <Link to='/register' className="text-center text-base md:text-lg font-semibold">Register</Link>
          </div>
              <div className="w-10 rounded-full ml-8">
                <img
                className="rounded-full cursor-pointer"
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
          </div>
       
      </div>
    
  );
};

export default Header;
