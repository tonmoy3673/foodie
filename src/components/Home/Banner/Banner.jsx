import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <div className="home-banner py-20 min-h-screen flex justify-center items-center bg-blend-multiply bg-black">
        <div className="text-center banner-content">
          <div>
            <h1 className="text-white title text-3xl xl:text-4xl 2xl:text-[42px] 4xl:text-[45px] leading-10">
              A Taste of Perfection: Where Every Meal is a Masterpiece
            </h1>
            <p className="mt-8 leading-10 text-white text-base font-normal lg:px-20 text-center">
              From Our Kitchen to Yours: Bringing Gourmet Home. Delight in Every
              Bite with Our Exquisite Recipes. We pride ourselves on delivering
              food and unparalleled customer satisfaction.
            </p>
            <div className="flex justify-center">
              <button className="rounded-md z-40 hover:bg-warning bg-[#880769] text-white py-4 px-8 mt-8 my-btn">
                  Get an Estimate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
