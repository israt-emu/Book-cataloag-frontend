import React, {useState} from "react";
import {Link} from "react-router-dom";
import {AiOutlineMenu} from "react-icons/ai";
import {ImCross} from "react-icons/im";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.jpg";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {userLoggedOut} from "../redux/features/auth/authSlice";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {user} = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const logout = () => {
    dispatch(userLoggedOut());
  };
  return (
    <header className="md:mx-8 md:rounded-b md:rounded-r p-2 text-textColor sticky top-0 z-50 font-mono bg-primary shadow-lg">
      <div className="lg:container flex justify-between items-center h-12 ">
        <Link className="" to="/">
          <img src={logo} className="w-2/6 ml-2" alt="Logo" />
        </Link>

        <ul className="items-stretch hidden space-x-3 lg:flex px-4 rounded-md ">
          <li className="flex items-center">
            <Link to="/" className="flex items-center px-4 hover:bg-gray-500/30 py-1 rounded">
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <Link to="/allbooks" className="flex items-center px-4 hover:bg-gray-500/30 py-1 rounded">
              Books
            </Link>
          </li>
          <li className="flex items-center">
            <Link to="/wish-list" className="flex items-center px-4 hover:bg-gray-500/30 py-1 rounded">
              Wishlist
            </Link>
          </li>
          <li className="flex items-center">
            <Link to="/read-list" className="flex items-center px-4 hover:bg-gray-500/30 py-1 rounded">
              Reading List
            </Link>
          </li>
          <li className="flex items-center">{user?.token && <img src={avatar} alt="" className="w-6 h-6 rounded-full" />}</li>

          {user?.token ? (
            <button className="flex items-center px-4 ml-2 bg-gray-500/30 py-1 rounded" onClick={logout}>
              Log Out
            </button>
          ) : (
            <Link to="/login" className="flex items-center px-4 ml-2 bg-gray-500/30 py-1 rounded">
              Login
            </Link>
          )}
        </ul>
        <div className="flex justify-end items-center lg:hidden ml-auto mr-4">
          <AiOutlineMenu className="text-xl font-bold text-white cursor-pointer" onClick={() => setOpen(true)} />
        </div>
      </div>
      {/* ///mobile menu  */}
      <div className={`${open ? "flex" : "hidden"} justify-between backdrop-blur-sm skillbg border border-gray-700 px-4 rounded-md lg:hidden h-full w-9/12 mt-4`}>
        <ul className="items-stretch flex flex-col space-x-3">
          <li className="flex items-center">
            <Link to="/" className="flex items-center px-4 hover:bg-gray-500/30 py-1 rounded">
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <Link to="/allbooks" className="flex items-center px-4 hover:bg-gray-500/30 py-1 rounded">
              Books
            </Link>
          </li>
          <li className="flex items-center">
            <Link to="/allbooks" className="flex items-center px-4 hover:bg-gray-500/30 py-1 rounded">
              Wishlist
            </Link>
          </li>
          <li className="flex items-center">
            <Link to="/allbooks" className="flex items-center px-4 hover:bg-gray-500/30 py-1 rounded">
              Reading List
            </Link>
          </li>
          <li className="flex items-center">{user?.token && <img src={avatar} alt="" className="w-6 h-6 rounded-full" />}</li>
          {user?.token ? (
            <button className="flex items-center px-4 ml-2 bg-gray-500/30 py-1 rounded" onClick={logout}>
              Log Out
            </button>
          ) : (
            <Link to="/login" className="flex items-center px-4 ml-2 bg-gray-500/30 py-1 rounded">
              Login
            </Link>
          )}
        </ul>
        <div className="mt-4">
          <ImCross onClick={() => setOpen(false)} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
