import React from "react";
import {IBookProps} from "../../interfaces/book";
import bookImg from "../../assets/book.jpg";

const Details = ({book}: IBookProps) => {
  return (
    <div className="col-span-5 border-r-2 border-primary ">
      <div className="">
        <img src={bookImg} alt="book-image" className="w-9/12" />
      </div>

      <h3 className="font-semibold text-xl">Title: {book?.title}</h3>
      <p className="font-semibold">Author: {book?.author}</p>
      <p className="font-medium">Genre: {book?.genre}</p>
      <p className="font-medium">Publication Date: {book?.publicationYear}</p>
    </div>
  );
};

export default Details;
