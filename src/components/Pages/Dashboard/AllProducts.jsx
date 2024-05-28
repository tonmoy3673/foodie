import { useEffect, useState } from "react";
import Product from "./Product";


const AllProducts = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/foods")
        .then((res)=>res.json())
        .then((data)=>setProducts(data))
    },[])
    return (
        <div>
            <h2 className="text-center pb-4 md:pb-8 text-xl lg:text-3xl text-[#880769] font-semibold">All Foods Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    products.map((product)=><Product product={product}  key={product.id}/>)
                }
            </div>
        </div>
    );
};

export default AllProducts;