
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 bg-base-300 min-h-screen p-12 pt-12 lg:pt-28">
        <ul>
          <button className="bg-[#880769] hover:bg-warning rounded-md mb-6 p-4 text-white w-full">
            <Link to="/dashboard">Dashboard</Link>
          </button>
          <button className="bg-[#880769] hover:bg-warning rounded-md mb-6 p-4 text-white w-full">
            <Link to="/dashboard/all-products">All Products</Link>
          </button>
          <button className="bg-[#880769] hover:bg-warning rounded-md mb-6 p-4 text-white w-full">
            <Link to="/dashboard/add-products">Add Product</Link>
          </button>
          <button className="bg-[#880769] hover:bg-warning rounded-md p-4 text-white w-full">
            <Link to="/" >Home</Link>
          </button>
        </ul>
      </div>
      <div className="col-span-10 p-10 md:p-20">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;