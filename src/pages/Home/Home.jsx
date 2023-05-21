import BestSeller from "./BestSeller/BestSeller";
import FeaturedToys from "./FeaturedToys/FeaturedToys";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import Slider from "./Slider/Slider";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Slider />
            <FeaturedToys />
            <ShopByCategory />
            <BestSeller />
            <Testimonial />
        </div>
    );
};

export default Home;