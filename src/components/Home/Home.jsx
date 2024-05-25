import Banner from "./Banner/Banner";
import RatingNReviewSection from "./Rating/RatingSection";


const Home = () => {
    return (
        <div>
           <section>
           <Banner/>
           </section>
           <section>
            <RatingNReviewSection/>
           </section>
        </div>
    );
};

export default Home;