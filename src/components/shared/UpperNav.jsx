

const UpperNavbar = () => {
  return (
    <nav className="py-[7px] bg-[#880769] hidden md:block px-4">
      <div className="flex justify-between">
        <div className="flex items-center gap-x-[15px]">
          <img
            src="/src/assets/icons/logo.jpg"
            width={16}
            height={17}
            alt="map"
            className="w-[16px] h-[17px]"
          />
          <p className="text-[10px]  xl:text-[16px] font-bold text-white">
            Best Food Service Company in Dhaka
          </p>
        </div>

        <div className="flex items-center gap-x-2 xl:gap-x-4 5xl:gap-x-5">
          <div className="flex items-center gap-x-[15px]">
            <img
              src="/src/assets/icons/location.png"
              width={16}
              height={17}
              alt="map"
              className="w-[16px] h-[17px]"
            />
            <span className="text-[10px] xl:text-base text-white">
            Dhaka,Bangladesh
            </span>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1"
              height="14"
              viewBox="0 0 1 14"
              fill="none"
            >
              <line
                x1="0.5"
                y1="13.0386"
                x2="0.5"
                y2="0.000169754"
                stroke="white"
              />
            </svg>
          </div>
          <div className="flex items-center gap-x-[15px]">
            <img
              src="/src/assets/icons/watch.png"
              width={16}
              height={17}
              alt="map"
              className="w-[16px] h-[17px]"
            />
            <span className="text-[10px] xl:text-base text-white">
            Monday-Friday 9:00am-11:30pm
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UpperNavbar;
