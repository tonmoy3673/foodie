import { useLoaderData } from "react-router-dom";
import Feedback from "../Pages/Feedback";
import Foods from "../Pages/Foods/Foods";
import BrandSwiper from "./BandSwiper/BandSwiper";
import Banner from "./Banner/Banner";
import Mission from "./Mission";
import RatingNReviewSection from "./Rating/RatingSection";
import Services from "./Services";


const Home = () => {
    const data=useLoaderData();
    
    return (
        <div>
           <section>
           <Banner/>
           </section>
           <section>
            <RatingNReviewSection/>
           </section>
           {/* ======== Products======== */}
           <section>
            <Foods data={data}/>
           </section>
           <section>
           <Services/>
           </section>
           <section>
            <Mission/>
           </section>
           <section>
            <Feedback/>
           </section>
           <section>
            <BrandSwiper/>
           </section>
        </div>
    );
};

export default Home;