
const Rating = () => {
  let stars = 5;
  const ratingStar = Array.from({ length: 5 }, (star, i) => {

    return (
      <span key={i}>
        {stars >= i + 1 && (
          <img
          src='/src/assets/icons/rating.png'
          alt=""
          className="md:w-[20px] md:h-[19px] w-[9.84px] h-[9.34px]"
        />
        )} 
      </span>
    );
  });
  return <div className="flex gap-1 justify-center md:mt-1">{ratingStar}</div>;
};

export default Rating;
