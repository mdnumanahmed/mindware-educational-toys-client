import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../assets/logo.svg";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { NavLink, useNavigate } from "react-router-dom";

const MindWareNavbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="">
      <Navbar className="items-center bg-slate-200">
        <NavLink href="/">
          <img src={logo} className="mr-3 h-10 sm:h-12" alt="Mind Ware Logo" />
        </NavLink>
        <div className="flex items-center md:order-2 md:ml-auto">
          <button className="relative">
            <AiOutlineHeart className="flex mr-3 text-2xl" />
            <span className="absolute -top-2 right-2 text-white leading-4 text-xs bg-[#ff007a] rounded-full w-4 h-4">
              0
            </span>
          </button>
          <button className="relative">
            <AiOutlineShoppingCart className="flex mr-3 text-2xl" />
            <span className="absolute -top-2 right-2 text-white leading-4 text-xs bg-[#ff007a] rounded-full w-4 h-4">
              0
            </span>
          </button>
          {user ? (
            <>
              <Dropdown
                arrowIcon={false}
                inline={true}
                label={
                  <Avatar
                    alt="User settings"
                    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    rounded={true}
                  />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">Bonnie Green</span>
                  <span className="block truncate text-sm font-medium">
                    name@flowbite.com
                  </span>
                </Dropdown.Header>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Sign out</Dropdown.Item>
              </Dropdown>
              <button
                onClick={handleLogOut}
                className="relative inline-flex items-center justify-center p-0.5 mx-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Log Out
                </span>
              </button>
            </>
          ) : (
            <button
              type="button"
              className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Login
            </button>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink to="/" active='true'>
            Home
          </NavLink>
          <NavLink to="/all-toys">All Toys</NavLink>
          {user && (
            <>
              <NavLink to="/my-toys">My Toys</NavLink>
              <NavLink to="/add-toy">Add Toys</NavLink>
            </>
          )}
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MindWareNavbar;
