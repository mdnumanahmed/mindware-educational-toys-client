import { useContext } from "react";
import BestSeller from "./BestSeller/BestSeller";
import FeaturedToys from "./FeaturedToys/FeaturedToys";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import Slider from "./Slider/Slider";
import Testimonial from "./Testimonial/Testimonial";
import { AuthContext } from "../../providers/AuthProvider";
import Spinner from "../../shared/Spinner";
import useTitle from "../../hooks/useTitle";

const Home = () => {
    useTitle('Home')
    const {loading} = useContext(AuthContext)
    if(loading){
        return <Spinner />
    }
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