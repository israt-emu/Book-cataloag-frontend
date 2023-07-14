import {RiInstagramLine, RiFacebookBoxFill} from "react-icons/ri";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <div className="bg-accent text-secondary p-16">
      <div className="flex justify-between items-start lg:container ">
        <div className="grid grid-cols-4 items-center">
          <ul className="space-y-2">
            <li>Upcoming</li>
            <li>Shipping</li>
            <li>How it works</li>
          </ul>
          <ul className="space-y-2">
            <li>Support</li>
            <li>Careers</li>
          </ul>
          <ul className="space-y-2">
            <li>Contact team:</li>
            <li className="flex items-center justify-start">
              <RiFacebookBoxFill />
              Facebook
            </li>
            <li className="flex items-center justify-start">
              <RiInstagramLine />
              Instagram
            </li>
          </ul>
          <ul>
            <li>
              <img className="w-2/5" src={logo} alt="Logo" />
            </li>
            <li>Copyright 2023</li>

            <li>All rights reserved</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
