import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToyRoute = () => {

  const {id} = useParams()
  const { user } = useContext(AuthContext);
  const [control, setControl] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  
  const [toy, setToy] = useState({})

  useEffect(()=>{
    fetch(`http://localhost:5000/toy/${id}`)
    .then(res => res.json())
    .then(data => {
      setToy(data)
    })
  },[id])

  const handleUpdate = (data) => {
    fetch(`http://localhost:5000/toys/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res);
        res.json()
      })
      .then((result) => {
        if (result.modifiedCount > 0) {
          setControl(!control);
          Swal.fire({
            icon: "success",
            title: "Welcome",
            text: "Your toy updated successfully!",
          });
        }
        console.log(result);
      });
  };

  return (
    <div>
      <div className="w-[50%] mx-auto p-20 bg-slate-50 rounded-lg shadow-lg">
        <div className="form-title text-center mb-5">
          <h2 className="text-3xl font-bold text-[#ff2556]">
            Update Your Selected Toy
          </h2>
        </div>
        <div>
          <form onSubmit={handleSubmit(handleUpdate)}>
            <div className="">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  id="toy_id"
                  placeholder=" "
                  value={toy?._id}
                  className=""
                  {...register("toy_id")}
                />

                <input
                  type="text"
                  id="photo"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={toy?.photo}
                  {...register("photo", { required: true })}
                  aria-invalid={errors.photo ? "true" : "false"}
                />
                {errors.photo?.type === "required" && (
                  <p className="text-red-600" role="alert">
                    Photo URL is required
                  </p>
                )}
                <label
                  htmlFor="photo"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                >
                  Photo URL of the toy
                </label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  id="toy_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={toy?.toy_name}
                  {...register("toy_name", { required: true })}
                  aria-invalid={errors.toy_name ? "true" : "false"}
                />
                {errors.toy_name?.type === "required" && (
                  <p className="text-red-600" role="alert">
                    Toy Name field is required
                  </p>
                )}
                <label
                  htmlFor="toy_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                >
                  Toy Name
                </label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  id="seller_name"
                  value={user?.displayName}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  {...register("seller_name", { required: true })}
                  aria-invalid={errors.seller_name ? "true" : "false"}
                />
                {errors.seller_name?.type === "required" && (
                  <p className="text-red-600" role="alert">
                    Seller Name field is required
                  </p>
                )}
                <label
                  htmlFor="seller_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                >
                  Seller Name
                </label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  value={user?.email}
                  id="seller_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  {...register("seller_email", {
                    required: "Seller Email field is required",
                  })}
                  aria-invalid={errors.seller_email ? "true" : "false"}
                />
                {errors.seller_email && (
                  <p className="text-red-600" role="alert">
                    {errors.seller_email?.message}
                  </p>
                )}
                <label
                  htmlFor="seller_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                >
                  Seller Email Address
                </label>
              </div>

              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register("sub_category")}
                    value={toy?.sub_category}
                  >
                    <option value="ؒmath">ؒMath Toys</option>
                    <option value="language">Language Toys</option>
                    <option value="science">Science Toys</option>
                    <option value="engineering">Engineering Toys</option>
                  </select>

                  <label
                    htmlFor="sub_category"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                  >
                    Sub Category
                  </label>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="number"
                    id="price"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    defaultValue={toy?.price}
                    {...register("price", {
                      required: "Price field is required",
                    })}
                    aria-invalid={errors.price ? "true" : "false"}
                  />
                  {errors.price && (
                    <p className="text-red-600" role="alert">
                      {errors.price?.message}
                    </p>
                  )}
                  <label
                    htmlFor="price"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                  >
                    Price
                  </label>
                </div>
              </div>

              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="number"
                    id="toy_rating"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={toy?.toy_rating}
                    {...register("toy_rating", {
                      required: "Toy Rating field is required",
                    })}
                    aria-invalid={errors.toy_rating ? "true" : "false"}
                  />
                  {errors.toy_rating && (
                    <p className="text-red-600" role="alert">
                      {errors.toy_rating?.message}
                    </p>
                  )}
                  <label
                    htmlFor="toy_rating"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                  >
                    Toy Rating
                  </label>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="number"
                    id="available_quantity"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    defaultValue={toy?.available_quantity}
                    {...register("available_quantity", {
                      required: "Available quantity field is required",
                    })}
                    aria-invalid={errors.available_quantity ? "true" : "false"}
                  />
                  {errors.available_quantity && (
                    <p className="text-red-600" role="alert">
                      {errors.available_quantity?.message}
                    </p>
                  )}
                  <label
                    htmlFor="available_quantity"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                  >
                    Available Quantity
                  </label>
                </div>
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                >
                  Your message
                </label>
                <textarea
                  {...register("description")}
                  id="description"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Leave a comment..."
                  defaultValue={toy?.description}
                ></textarea>
              </div>

              <div className="text-center my-5">
                <input
                  type="submit"
                  value="Update a Toy"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateToyRoute;
