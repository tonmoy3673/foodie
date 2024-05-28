import toast from "react-hot-toast";
import { FaLocationArrow } from "react-icons/fa6";


const AddProducts = () => {
  const handleSubmit=async(e)=>{
  e.preventDefault();
  const form=e.target;
  const id=form.id.value;
  const title=form.name.value;
  const price=form.price.value;
  const brand=form.brand.value;
  const description=form.description.value;
  const image_url=form.photo.value;
 const data={title,brand,description,image_url, id,price};
 console.log(data);
    await fetch("http://localhost:3000/foods",{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(data)
      
    })
    .then((res)=>res.json())
    .then((data)=>console.log("fetch data :",data))
    form.reset();
    toast.success('New Food Added Successfully!!')
    

  };
    return (
        <div>
            <h2 className="text-center pb-4 md:pb-8 text-xl lg:text-3xl text-[#880769] font-semibold">Add New Food Items</h2>
            <div className=" lg:col-span-6 md:col-span-4 md:order-1  lg:py-30 md:flex items-center 5xl:ml-[285px] 4xl:ml-[200px] 3xl:ml-[150px] 2xl:ml-[100px] xl:ml-[80px] lg:ml-[40px] md:ml-[20px]  ">

                {/* =========== Form Part ======= */}
            <div className="rounded-lg items-center py-7 mx-auto">
              
              <form onSubmit={handleSubmit} className=" ">
                <div className="text-base">
                  <div className="grid grid-cols-1 gap-6 md:gap-12 md:grid-cols-2 lg:mb-8 mb-4">
                    <div>
                      {" "}
                      <h5 className="mb-2 text-[#880769] text-base">Food name *</h5>
                      <label className="sr-only" htmlFor="name">
                        name
                      </label>
                      <input
                        className="w-full rounded-lg bg-[#C477B126] shadow-sm shadow-black p-3 lg:pr-16 pr-3 text-sm" // Added pr-12 class for padding-right
                        placeholder="Type Food Name"
                        type="text"
                        id="name"
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

export default AddProducts;