import toast from "react-hot-toast";
import { Link } from "react-router-dom";


const Product = ({product, setProducts,products} ) => {
    const {image_url,title,price,id}=product;
    
      const handleDelete=async(id)=>{
        await fetch(`http://localhost:3000/foods/${id}`,{
          method:"DELETE"
        })
        .then((res)=>res.json())
        .then((data)=>{
          console.log(data);
        setProducts(products.filter((product)=>product.id !==id))
        toast.error('Food has been Deleted Successfully!!')
        })
        
      }
    return (
        <div>
            <div className="card card-compact h-[220px] lg:h-[350px] w-48 lg:w-72 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={image_url}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body bg-base-200 text-center">
                <h2 className="text-base md:text-xl text-[#880769] font-semibold">{title}</h2>
                <p className="font-semibold text-red-600 text-base lg:text-lg">Price : {price}$</p>
                <div className="card-actions justify-center mt-2">
                  <Link to={`/foods/${id}`}>
                  <button className="btn hover:bg-warning bg-[#880769] text-white">
                   Details 
                  </button>
                  </Link>
                  <button onClick={()=> handleDelete(id)} className="btn hover:bg-warning bg-red-600 text-white">
                   Delete 
                  </button>
                  <button className="btn hover:bg-warning bg-green-600 text-white">
                   Update 
                  </button>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Product;