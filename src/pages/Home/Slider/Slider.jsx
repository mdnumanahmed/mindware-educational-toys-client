import { Carousel } from "flowbite-react";
import slide1 from '../../../assets/slider/slide1.webp'
import slide2 from '../../../assets/slider/slide2.webp'
import slide3 from '../../../assets/slider/slide3.webp'
import slide4 from '../../../assets/slider/slide4.webp'

const Slider = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img src={slide1} alt="" />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <img src={slide2} alt="" />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <img src={slide3} alt="" />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <img src={slide4} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
