import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../assets/logo.svg";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
const MindWareNavbar = () => {
  return (
    <div className="">
      <Navbar className="items-center bg-slate-200">
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src={logo}
            className="mr-3 h-6 sm:h-9"
            alt="Mind Ware Logo"
          />
        </Navbar.Brand>
        <div className="flex items-center md:order-2 md:ml-auto">
        <button className="relative">
              <AiOutlineHeart className="flex mr-3 text-2xl" />
              <span className="absolute -top-2 right-2 text-white leading-4 text-xs bg-[#ff2556] rounded-full w-4 h-4">
                0
              </span>
            </button>
            <button className="relative">
              <AiOutlineShoppingCart className="flex mr-3 text-2xl" />
              <span className="absolute -top-2 right-2 text-white leading-4 text-xs bg-[#ff2556] rounded-full w-4 h-4">
                0
              </span>
            </button>
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
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">All Toys</Navbar.Link>
          <Navbar.Link href="/navbars">My Toys</Navbar.Link>
          <Navbar.Link href="/navbars">Add Toys</Navbar.Link>
          <Navbar.Link href="/navbars">About Us</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MindWareNavbar;
