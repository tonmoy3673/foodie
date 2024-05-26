import { useLoaderData } from "react-router-dom";

const FoodDetails = () => {
  const food = useLoaderData();
  const { title, brand, price, description, image_url } = food;

  console.log(food);
  return (
    <div className="card bg-base-100">
      <figure className="px-10 pt-10">
        <img src={image_url} alt="food" className="rounded-lg" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="text-base md:text-xl lg:text-3xl text-center text-[#880769] font-semibold">
          {title}
        </h2>
        <p className="font-semibold text-red-600 text-base lg:text-lg">
          Price : {price}$
        </p>
        <p className="font-semibold text-base md:text-lg">Tradition : {brand}</p>
        <p><span className="text-base md:text-lg font-semibold">Description</span> : {description}</p>
        <div className="rating">
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-orange-400"
            
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
