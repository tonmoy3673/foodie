import BrandSwiper from "./BandSwiper/BandSwiper";
import Banner from "./Banner/Banner";
import Mission from "./Mission";
import RatingNReviewSection from "./Rating/RatingSection";
import Services from "./Services";


const Home = () => {
    return (
        <div>
           <section>
           <Banner/>
           </section>
           <section>
            <RatingNReviewSection/>
           </section>
           <section>
           <Services/>
           </section>
           <section>
            <Mission/>
           </section>
           <section>
            <BrandSwiper/>
           </section>
        </div>
    );
};

export default Home;