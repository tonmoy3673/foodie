

import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";


const UpdateProduct = () => {
    const foods=useLoaderData();
    const [title,setTitle]=useState(foods.title);
    const [id,setId]=useState(foods.id);
    const [price,setPrice]=useState(foods.price);
    const [brand,setBrand]=useState(foods.brand);
    const [description,setDescription]=useState(foods.description);
    const [image_url,setImageUrl]=useState(foods.image_url);

    console.log(foods);

  const handleSubmit=async(e)=>{
  e.preventDefault();
  const form=e.target;
  const id=form.id.value;
  const title=form.title.value;
  const price=form.price.value;
  const brand=form.brand.value;
  const description=form.description.value;
  const image_url=form.photo.value;
 const data={title,brand,description,image_url, id,price};
 console.log(data);
    await fetch(`http://localhost:3000/foods/${foods.id}`,
        {
            method:"PATCH",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify(data),

        })
        .then((res)=>res.json())
        .then((data)=>console.log(data))

  };
    return (
        <div>
            <h2 className="text-center pb-4 md:pb-8 text-xl lg:text-3xl text-[#880769] font-semibold">Edit Food Info</h2>
            <div className=" lg:col-span-6 md:col-span-4 md:order-1  lg:py-30 md:flex items-center 5xl:ml-[285px] 4xl:ml-[200px] 3xl:ml-[150px] 2xl:ml-[100px] xl:ml-[80px] lg:ml-[40px] md:ml-[20px]  ">

                {/* =========== Form Part ======= */}
            <div className="rounded-lg items-center py-7 mx-auto">
              
              <form onSubmit={handleSubmit} className=" ">
                <div className="text-base">
                  <div className="grid grid-cols-1 gap-6 md:gap-12 md:grid-cols-2 lg:mb-8 mb-4">
                    <div>
                      {" "}
                      <h5 className="mb-2 text-[#880769] text-base">Food name *</h5>
                      <label className="sr-only" htmlFor="title">
                        title
                      </label>
                      <input
                        className="w-full rounded-lg bg-[#C477B126] shadow-sm shadow-black p-3 lg:pr-16 pr-3 text-sm" // Added pr-12 class for padding-right
                        placeholder="Type Food Name"
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                      />
                    </div>

                    <div>
                      <h5 className="mb-2 text-[#880769] text-base">Price *</h5>
                      <label className="sr-only" htmlFor="price">
                        Price
                      </label>
                      <input
                        className="w-full rounded-lg bg-[#C477B126]  shadow-sm shadow-black p-3 lg:pr-16 pr-3  text-sm"
                        placeholder="Type Price $"
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e)=>setPrice(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:mb-8 mb-4  ">
                  <div>
                    <h5 className="mb-2 text-[#880769] text-base">Brands *</h5>
                    <label className="sr-only" htmlFor="brands">
                      Brands
                    </label>
                    <input
                      className="w-full rounded-lg bg-[#C477B126] shadow-sm shadow-black p-3 lg:pr-16 pr-3  text-sm"
                      placeholder="Type Brand Name "
                      type="text"
                      id="brand"
                      value={brand}
                      onChange={(e)=>setBrand(e.target.value)}
                    />
                  </div>

                  <div>
                    <h5 className="mb-2 text-[#880769] text-base">Photo URL *</h5>
                    <label className="sr-only" htmlFor="phone">
                      Photo
                    </label>
                    <input
                      className="w-full rounded-lg bg-[#C477B126] shadow-sm shadow-black p-3 lg:pr-16 pr-3  text-sm"
                      placeholder="Input Photo URL"
                      type="text"
                      id="photo"
                      value={image_url}
                      onChange={(e)=>setImageUrl(e.target.value)}
                    />
                  </div>
                </div>

               <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:mb-8 mb-4 ">
               <div >
                  <label className="sr-only" htmlFor="Description">
                  Description
                  </label>
                  <h5 className="mb-2 text-[#880769] text-base">Description *</h5>
                  <textarea
                    className="w-full rounded-lg bg-[#C477B126] shadow-sm shadow-black p-4 lg:pr-16 pr-3  text-sm"
                    placeholder="Write Description..."
                    rows="6"
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div>
                    <h5 className="mb-2 text-[#880769] text-base">ID *</h5>
                    <label className="sr-only" htmlFor="id">
                      ID
                    </label>
                    <input
                      className="w-full rounded-lg bg-[#C477B126] shadow-sm shadow-black p-3 lg:pr-16 pr-3  text-sm"
                      placeholder="Type Product ID "
                      type="text"
                      id="id"
                      value={id}
                      onChange={(e)=>setId(e.target.value)}
                    />
                  </div>
               </div>

                <div className=" flex md:block xs:justify-center xs:items-center xs:mx-auto">
                  <button
                  value='submit'
                    type="submit"
                    className="rounded-md bg-[#880769] hover:bg-[#FBCC21E4] px-10 py-4 md:px-20  font-semibold text-base  text-white items-center flex lg:mt-13 mt-8 "
                  >
                    Submit <FaLocationArrow className=" ml-2  " />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
    );
};

export default UpdateProduct;