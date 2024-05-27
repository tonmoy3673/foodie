

const Product = (product) => {
    const {image_url,title,price}=product.product;

    
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
                  <button className="btn hover:bg-warning bg-[#880769] text-white">
                   Details
                  </button>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Product;