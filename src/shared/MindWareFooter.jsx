import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const MindWareFooter = () => {
  return (
    <div className="border border-t-2">
      <Footer bgDark={true}>
        <div className="w-full">
          <div className="grid container mx-auto grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
            <div>
              <Footer.Title title="Company" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">About</Footer.Link>
                <Footer.Link href="#">Careers</Footer.Link>
                <Footer.Link href="#">Brand Center</Footer.Link>
                <Footer.Link href="#">Blog</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="help center" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">Discord Server</Footer.Link>
                <Footer.Link href="#">Twitter</Footer.Link>
                <Footer.Link href="#">Facebook</Footer.Link>
                <Footer.Link href="#">Contact Us</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="legal" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Licensing</Footer.Link>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="download" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">iOS</Footer.Link>
                <Footer.Link href="#">Android</Footer.Link>
                <Footer.Link href="#">Windows</Footer.Link>
                <Footer.Link href="#">MacOS</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
          <div className=" bg-gray-700 ">
            <div className="container mx-auto py-4 px-4 text-center md:flex md:items-center md:justify-between">
              <div className="flex justify-center">
              <NavLink to="/" >
                <img
                  src={logo}
                  className="mr-3 h-6 sm:h-12 "
                  alt="Mind Ware Logo"
                />
              </NavLink>
              </div>
              <Footer.Copyright href="#" by="Mindware" year={2023} />
              <div className="mt-4 flex space-x-6 sm:mt-0 justify-center sm:justify-center">
                <Footer.Icon href="#" icon={BsFacebook} />
                <Footer.Icon href="#" icon={BsInstagram} />
                <Footer.Icon href="#" icon={BsTwitter} />
                <Footer.Icon href="#" icon={BsGithub} />
              </div>
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default MindWareFooter;
