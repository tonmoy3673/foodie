import { useEffect, useState } from "react";


const AllProducts = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/foods")
        .then((res)=>res.json())
        .then((data)=>console.log(data))
    },[])
    return (
        <div>
            <h2>All Foods Items</h2>
            
        </div>
    );
};

export default AllProducts;