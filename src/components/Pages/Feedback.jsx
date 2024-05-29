
import { FaLocationArrow } from "react-icons/fa6";
const Feedback = () => {
    return (
        <div className="py-6 lg:py-10 mb-5 md:mb-10 md:flex gap-20  items-center" >
           <div>
                <img src='/src/assets/images/feedback.jpg' className='w-[300px] lg:w-[500px] mx-auto md:mx-0'>
                </img>
            </div>
           <div>       
            <div className="rounded-lg  items-center">
              <h2 className="lg:mb-10 mb-5 text-lg lg:text-3xl 2xl:text-[32px] text-[#880769] font-semibold text-center">
                {" "}
                Give Us Feedback{" "}
              </h2>
              <form action="#" className=" ">
                <div className="text-base">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:mb-8 mb-4">
                    <div>
                      {" "}
                      <h5 className="mb-2 text-[#880769] text-sm  md:text-base font-semibold">Your name *</h5>
                      <label className="sr-only" htmlFor="name">
                        name
                      </label>
                      <input
                        className="w-full rounded-lg bg-[#C477B126] shadow-sm shadow-black p-3 lg:pr-16 pr-3 text-sm" // Added pr-12 class for padding-right
                        placeholder="Robot Fox"
                        type="text"
                        id="name"
                      />
                    </div>

                    <div>
                      <h5 className="mb-2 text-[#880769] text-sm md:text-base font-semibold">Email *</h5>
                      <label className="sr-only" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="w-full rounded-lg bg-[#C477B126]  shadow-sm shadow-black p-3 lg:pr-16 pr-3  text-sm"
                        placeholder="info.example@gmail.com"
                        type="email"
                        id="email"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:mb-8 mb-4  ">
                  <div>
                    <h5 className="mb-2 text-[#880769] text-sm md:text-base font-semibold">Subjects *</h5>
                    <label className="sr-only" htmlFor="text">
                      Text
                    </label>
                    <input
                      className="w-full rounded-lg bg-[#C477B126] shadow-sm shadow-black p-3 lg:pr-16 pr-3  text-sm"
                      placeholder="Subjects "
                      type="text"
                      id="text"
                    />
                  </div>

                  <div>
                    <h5 className="mb-2 text-[#880769] text-sm md:text-base font-semibold">Your Phone *</h5>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg bg-[#C477B126] shadow-sm shadow-black p-3 lg:pr-16 pr-3  text-sm"
                      placeholder="+8801700000000"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>
                  <h5 className="mb-2 text-[#880769] text-sm md:text-base font-semibold">Message *</h5>
                  <textarea
                    className="w-full rounded-lg bg-[#C477B126] shadow-sm shadow-black p-4 lg:pr-16 pr-3  text-sm"
                    placeholder="Write Message"
                    rows="6"
                    id="message"
                  ></textarea>
                </div>

                <div className=" flex md:block xs:justify-center xs:items-center xs:mx-auto">
                  <button
                    type="submit"
                    className="  rounded-md bg-[#880769] hover:bg-warning px-10 py-4 md:px-20  font-semibold text-sm md:text-base text-white  items-center flex lg:mt-13 mt-8 "
                  >
                    Submit <FaLocationArrow className=" ml-2 text-white" />
                  </button>
                </div>
              </form>
            </div>
          
           </div>
        </div>
    );
};

export default Feedback;