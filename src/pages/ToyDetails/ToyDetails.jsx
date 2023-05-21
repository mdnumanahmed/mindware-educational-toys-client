import { useContext } from "react";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Spinner from "../../shared/Spinner";

const ToyDetails = () => {
  useTitle("Toy Details");
  const { loading } = useContext(AuthContext);
  const toy = useLoaderData();
  const {
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

  useTitle('Toy Details')
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="lg:flex container mx-auto">
      <img
        className="md:w-1/2 lg:w-3/5 lg:h-screen md:rounded-none md:rounded-l-lg "
        src={photo}
        alt={toy_name}
      />
      <div className="md:w-1/2 lg:w-full lg:h-screen p-8 leading-normal bg-blue-50">
        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          {toy_name}
        </h5>
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          Seller : {seller_name}
        </h5>
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          Seller Email : {seller_email}
        </h5>
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          Sub Category : {sub_category}
        </h5>
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          Price : ${price}
        </h5>
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          Ratings : {toy_rating}
        </h5>
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          Available Quantity : {available_quantity}
        </h5>
        <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">
          Description : {description}
        </h5>
      </div>
    </div>
  );
};

export default ToyDetails;
