import React from "react";

const BookSidebar = () => {
  return (
    <div>
      <input type="search" className="pl-3 py-2 outline-none bg-fill rounded" placeholder="Search" />
      <p className="my-2">Filter By:</p>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <input type="checkbox" name="" id="" />
          <p className="mx-2">Genre</p>
        </div>
        <select name="" id="" className="py-1 px-2 outline-none rounded">
          <option value="">Select a Genre</option>
        </select>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input type="checkbox" name="" id="" />
          <p className="mx-2">Publication year</p>
        </div>
        <select name="" id="" className="py-1 px-2 outline-none rounded">
          <option value="">Select an year</option>
        </select>
      </div>
    </div>
  );
};

export default BookSidebar;
