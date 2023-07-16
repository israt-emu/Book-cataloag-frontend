import React from "react";
import {IBookProps} from "../../interfaces/book";
import {FaHeart} from "react-icons/fa";
import {Link} from "react-router-dom";
const BookCard = ({book}: IBookProps) => {
  const {title, genre, author, publicationYear, _id} = book;
  return (
    <div className="max-w-xs rounded-md shadow-md h-full bg-fill">
      <Link to={`/book-details/${_id}`}>
        <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-48 dark:bg-gray-500" />
        <div className="flex flex-col justify-between p-6 space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="font-semibold">Author: {author}</p>
            <p className="text-sm">Genre: {genre}</p>
            <p className="text-sm">Publication Year: {publicationYear}</p>
          </div>
          <div className="flex items-center font-semibold rounded-md text-2xl text-accent">
            <FaHeart />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
