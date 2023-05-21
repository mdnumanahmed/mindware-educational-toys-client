import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Swal from "sweetalert2";

const CategoryToy = ({ toy }) => {
  const { _id, toy_name, price, toy_rating, photo } = toy;

  const { user } = useContext(AuthContext);

  const handleDetails = () => {
    if (!user) {
      Swal.fire({
        title: "Attention Please!!!",
        text: "You have to log in first to view details!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go to Login page",
      });
    }
  };
  return (
    <div className="relative overflow-hidden group">
      <img data-aos="slide-up" data-aos-easing="ease-in" data-aos-duration="600" 
        className="h-auto max-w-full rounded-lg"
        src={photo}
        alt={toy_name}
      />
      <div className="absolute rounded-xl flex flex-col justify-center items-center w-0 -left-20 h-0 top-0 bg-gradient-to-r from-[rgba(21,21,21,0.8)] to-[rgba(21,21,21,0.8)] text-white space-y-3 transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:left-0">
        <h3 className="text-2xl font-bold">{toy_name}</h3>
        <p className="text-xl font-bold">Price: ${price}</p>
        <Rating
          className=""
          style={{ maxWidth: 100 }}
          value={toy_rating}
          readOnly
        />
        <p className="text-xl font-bold">Ratings: {toy_rating}</p>
        <Link to={`/toy/${_id}`}>
          <button
            onClick={handleDetails}
            type="button"
            className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryToy;
