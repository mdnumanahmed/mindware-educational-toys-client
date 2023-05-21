import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const BestToy = ({toy}) => {
    const { toy_name, price, toy_rating, photo } = toy;
  return (
    <div data-aos="slide-up" data-aos-easing="ease-in" data-aos-duration="600" data-aos-delay="50" className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="p-8 rounded-t-lg"
          src={photo}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5 space-y-3">
        <a href="#">
          <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
            {toy_name}
          </h5>
        </a>
        <Rating
          className=""
          style={{ maxWidth: 100 }}
          value={toy_rating}
          readOnly
        />
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <a
            href="#"
            className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default BestToy;
