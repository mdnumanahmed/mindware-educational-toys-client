import FeaturedToys from "./FeaturedToys/FeaturedToys";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import Slider from "./Slider/Slider";

const Home = () => {
    return (
        <div>
            <Slider />
            <FeaturedToys />
            <ShopByCategory />
        </div>
    );
};

export default Home;