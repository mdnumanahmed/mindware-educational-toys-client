import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToyRow from "./MyToyRow";
import Swal from "sweetalert2";
import UpdateToy from "./UpdateToyModal";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [modalData, setModalData] = useState({})
  const [modalShow, setModalShow] = useState(false)


  useEffect(() => {
    fetch(`https://mindware-server.vercel.app/my-toys/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user.email]);

  const handleUpdateData = (data) => {
    setModalShow(true)
    setModalData(data)
    console.log(data._id);
  }

  const handleUpdate = (data) => {
    console.log(data.toy_id);
    fetch(`https://mindware-server.vercel.app/toys/${data.toy_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Welcome",
            text: "Your toy updated successfully!",
          });
        }
        console.log(data);
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://mindware-server.vercel.app/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = myToys.filter((toy) => toy._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg container mx-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Photo
              </th>
              <th scope="col" className="px-6 py-3">
                Seller Name
              </th>
              <th scope="col" className="px-6 py-3">
                Toy Name
              </th>
              <th scope="col" className="px-6 py-3">
                Sub Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Avail Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Rating
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toy) => (
              <MyToyRow key={toy._id} toy={toy} handleUpdateData={handleUpdateData} handleDelete={handleDelete} />
            ))}
          </tbody>
        </table>
        <UpdateToy
          modalShow={modalShow}
          setModalShow={setModalShow}
          toy={modalData}
          setModalData={setModalData}
          handleUpdate={handleUpdate}
        />
      </div>
    </div>
  );
};

export default MyToys;
