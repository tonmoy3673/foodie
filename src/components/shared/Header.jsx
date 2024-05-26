import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(error => console.error(error))
  }
  return (
    <div>
      <div className="navbar bg-base-100 py-6">
        <div className="flex-1">
          <h2 className="text-4xl cursor-pointer font-bold text-[#880769] hover:text-warning"><Link to='/'>Foodie</Link></h2>
        </div>
        <div className="flex-none gap-2">
          <div className="flex gap-10">
          <Link to='/home' className="text-center text-base md:text-lg font-semibold text-[#880769] hover:text-warning">Home</Link>
            <Link to='/about' className="text-center text-base md:text-lg font-semibold text-[#880769] hover:text-warning">About</Link>
            <Link to='/feedback' className="text-center text-base md:text-lg font-semibold text-[#880769] hover:text-warning">Feedback</Link>
            
            
            {
              user?.uid?
              <>
              <Link className="text-center text-base md:text-lg font-semibold text-[#880769] hover:text-warning" to='/dashboard'>Dashboard</Link>
              <button onClick={handleLogout} className="hover:bg-warning py-2 px-4 rounded-xl font-semibold bg-[#880769] text-white">Log Out</button>
              
              </>
              :
              <>
              <Link to='/login' className="text-center text-base md:text-lg font-semibold text-[#880769] hover:text-warning">Login</Link>
              <Link to='/register' className="text-center text-base md:text-lg font-semibold text-[#880769]   hover:text-warning">Register</Link>
              </>
            }
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
