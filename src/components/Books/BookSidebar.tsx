import React from "react";

const BookSidebar = () => {
  return (
    <div>
      <input type="search" className="pl-3 py-2 outline-none bg-fill rounded" placeholder="Search" />
      <p className="my-2">Filter By:</p>
      <div className="flex items-center justify-between mb-2">
        <p className="">Genre:-</p>
        <select name="" id="" className="py-1 px-2 outline-none rounded">
          <option value="">Select a Genre</option>
        </select>
      </div>
      <div className="flex items-center justify-between">
        <p className="">Publication year:-</p>

        <select name="" id="" className="py-1 px-2 outline-none rounded">
          <option value="">Select an year</option>
        </select>
      </div>
    </div>
  );
};

export default BookSidebar;
