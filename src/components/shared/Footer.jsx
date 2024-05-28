import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="mt-10">
      <div className=" footer__bg bg-blend-multiply  lg:px-[35px] xs:px-[20px] !text-white relative  bg-black">
        {/* company logo */}
        <div className=" absolute lg:-top-20 -top-10 left-1/2 lg:-ml-[90px] -ml-[50px] lg:w-auto lg:h-auto w-[100px] h-[100px]  ">
          <img
            src="/src/assets/icons/logo.jpg"
            height={140}
            width={150}
            className="rounded-full"
          />
        </div>

        <div className="container">
          <div className="z-100 2xl:pt-[180px] lg:pt-[160px] pt-[80px] 2xl:pb-[65px] pb-[50px] text-white ">
           
              
                <div className="md:flex gap-10 text-center justify-evenly items-center">
                 
                  <div className="mr-10">
                    <h4 className=" lg:text-[25px] text-[20px]">
                      We Are Foodie Magnificence
                    </h4>
                    <p className="text-white  pt-3 mb-2">
                      We work with a passion of taking challenges and creating
                      new ones in advertising sector.
                    </p>
                  </div>
                  <div className=" mt-3 mr-8">
                    <h4 className="lg:text-xl text-base">Open Hours:</h4>
                    <p className="my-1 mt-3">
                    Monday-Friday 9:00am-11:30pm
                    </p>
                  </div>
                  </div>
                  <div className=" flex gap-8 mt-8 justify-center">
                    <FaFacebook className=" lg:w-[30px] lg:h-[28px] w-auto h-auto" />
                   <Link to='https://www.facebook.com/'>
                   <FaXTwitter className=" lg:w-[30px]  lg:h-280px] w-auto h-auto" />
                   </Link>
                    <FaInstagram className=" lg:w-[30px] lg:h-[28px] w-auto h-auto" />
                    <FaLinkedin className=" lg:w-[30px] lg:h-[28px] w-auto h-auto" />
                  </div>
                
             

              {/* terms */}
              <div className="lg:hidden block py-8">
                <div className="flex justify-center items-center text-center">
                  <div className=" ">
                    <div>
                      <p>
                        {" "}
                        © All Copyright 2024 by Foodie
                      </p>
                    </div>
                    <div className="flex gap-5 justify-center items-center text-center">
                      <p>Terms & Condition </p>
                      <p>Privacy Policy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     

      {/* creater company credit */}
      <div className=" footer-bottom-bg lg:block hidden">
        <div className="container grid grid-cols-3 gap-5 lg:py-6 xs:py-2  items-center  md:mx-auto text-center ">
          
            <p className=" 2xl:text-[16px] text-base   text-white">
              © All Copyright 2024 by Foodie
            </p>
            <p className=" 2xl:text-[16px] text-base   text-white">Terms & Condition</p>
            <p className=" 2xl:text-[16px] text-base   text-white">Privacy Policy</p>
          </div>
        
        </div>
     
    </footer>
  );
};

export default Footer;
