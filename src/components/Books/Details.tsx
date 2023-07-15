import React from "react";
import {IBookProps} from "../../interfaces/book";
import {useGetSingleBookQuery} from "../../redux/features/book/bookApi";
import {Link} from "react-router-dom";

const Details = ({book}: IBookProps) => {
  return (
    <div className="col-span-5 border-2 border-t-0 border-b-0 border-l-0">
      <div className="">
        <img src="https://source.unsplash.com/random/300x300/?2" alt="book-image" />
      </div>

      <h3 className="font-semibold text-xl">Title: {book?.title}</h3>
      <p className="font-semibold">Author: {book?.author}</p>
      <p className="font-medium">Genre: {book?.genre}</p>
      <p className="font-medium">Publication Date: {book?.publicationDate}</p>
    </div>
  );
};

export default Details;
