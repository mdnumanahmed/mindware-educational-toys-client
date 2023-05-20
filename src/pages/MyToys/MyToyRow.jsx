
import { HiPencilSquare, HiTrash } from "react-icons/hi2";
import { Link } from "react-router-dom";

const MyToyRow = ({ toy, handleDelete, handleUpdateData }) => {
  const {
    _id,
    photo,
    toy_name,
    seller_name,
    seller_email,
    price,
    toy_rating,
    available_quantity,
    description,
    sub_category,
  } = toy;

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-4 p-4">
        <div className="flex items-center">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="checkbox-table-search-1" className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <th>
        <img className="w-20 h-14 rounded-md" src={photo} alt="Jese image" />
      </th>
      <th
        scope="row"
        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div className="pl-3">
          <div className="text-base font-semibold">{seller_name}</div>
          <div className="font-normal text-gray-500">{seller_email}</div>
        </div>
      </th>
      <th className="px-6 py-4">{toy_name}</th>
      <td className="px-6 py-4">{sub_category}</td>
      <td className="px-6 py-4">${price}</td>
      <td className="px-6 py-4">{available_quantity}</td>
      <td className="px-6 py-4">{toy_rating}</td>
      <td className="px-6 py-4">{description}</td>
      <td className="px-6 py-4">
        <div className="flex">
          <Link to={`/toy-update/${_id}`}>
            <HiPencilSquare className="mr-4 text-xl text-blue-600 dark:text-blue-500 hover:underline" />
          </Link>
          <button onClick={() => handleUpdateData(toy)}>
            <HiPencilSquare className="mr-4 text-xl text-blue-600 dark:text-blue-500 hover:underline" />
          </button>
          <button onClick={() => handleDelete(_id)}>
            <HiTrash className="text-xl text-blue-600 dark:text-blue-500 hover:underline" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyToyRow;
