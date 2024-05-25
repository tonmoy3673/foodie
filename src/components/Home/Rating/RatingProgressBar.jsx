
const RatingProgressBar = () => {
  const ratings = [0,0,0,4,57];
  const totalRatings = ratings.reduce((acc, curr) => acc + curr, 0);

  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    const ratingCount = ratings[index] || 0;
    const percentage = (ratingCount / totalRatings) * 100;

    return (
      <div key={index} className="flex items-center justify-around md:gap-1 gap-[15px] w-full md:h-6 h-[11px] md:mb-[0px] mb-[15px]">
        <div className="md:w-2/12 w-[7%] flex items-center md:gap-2 gap-1">
          <span className="text-[10px] md:text-[14px] font-semibold">{index + 1}</span>
          <img
          
        className="md:w-4 w-[11px]  md:h-4 h-[11px]"
            src='/src/assets/icons/rating.png'
            alt="rating"
          />
        </div>
        <div className="md:w-8/12 w-[90%] bg-gray-200 rounded-[2px]">
          <div
            className={`md:h-4 h-[9px] bg-[#FFC700] rounded-[2px]`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <span className="md:w-1/12 w-[3%] text-end text-[10px] md:text-[14px] font-semibold">{ratingCount}</span>
      </div>
    );
  });

  return <div className="w-full">{ratingStar.reverse()}</div>;
};

export default RatingProgressBar;