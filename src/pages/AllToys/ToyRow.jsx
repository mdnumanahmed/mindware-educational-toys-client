import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const ToyRow = ({ toy, index }) => {
  const {user} = useContext(AuthContext)
  const {
    _id,
    seller_name,
    toy_name,
    sub_category,
    price,
    available_quantity,
  } = toy;

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
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-4 p-4">
        {index + 1}
      </td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {seller_name}
      </th>
      <th className="px-6 py-4">{toy_name}</th>
      <td className="px-6 py-4">{sub_category}</td>
      <td className="px-6 py-4">${price}</td>
      <td className="px-6 py-4">{available_quantity}</td>
      <td className="px-6 py-4">
      <Link to={`/toy/${_id}`}>
          <button
            onClick={handleDetails}
            type="button"
            className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            View Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default ToyRow;
