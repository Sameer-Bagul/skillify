// components/AppNavbar.js

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import UserIcon from "../images/user.png";
import Logo from "../images/logo.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AppNavBar = (props) => {
  let navigate = useNavigate();

  const { isLoggedIn, setIsLoggedIn, name, setName, email, setEmail } = props;

  const handleLogout = () => {
    setIsLoggedIn(false);
    setName(null);
    setEmail(null);
    navigate("/");
    toast.success("You are successfully logged out!");
  };

  return (
    <Navbar fluid>
      <Navbar.Brand href="https://www.sih.gov.in/">
        <img src={Logo} style={{ width: "250px", height: "50px" }} />
      </Navbar.Brand>
      {isLoggedIn && (
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="User settings" img={UserIcon} rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm">{name}</span>
              <span className="block truncate text-sm font-medium">
                {email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Your Orders</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
      )}
      <Navbar.Collapse>
        <Navbar.Link href="/" className="text-lg">
          Home
        </Navbar.Link>
        <Navbar.Link href="#" className="text-lg">
          About
        </Navbar.Link>
        <Navbar.Link href="#" className="text-lg">
          Services
        </Navbar.Link>
        <Navbar.Link href="#" className="text-lg">
          Pricing
        </Navbar.Link>
        <Navbar.Link href="#" className="text-lg">
          Contact
        </Navbar.Link>
        {!isLoggedIn && (
          <Navbar.Link href="/login" className="text-lg">
            Login
          </Navbar.Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavBar;
