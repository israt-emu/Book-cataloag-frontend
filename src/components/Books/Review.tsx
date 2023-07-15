import React from "react";
import {IBookProps} from "../../interfaces/book";
import {Link} from "react-router-dom";
import {BsFillSendFill} from "react-icons/bs";
import {MdReviews} from "react-icons/md";
import SingleReview from "./SingleReview";
const Review = ({book}: IBookProps) => {
  return (
    <div className="col-start-6 col-end-11 pl-4">
      <div className="flex justify-end items-center mb-3">
        <Link to={`/edit-book/${book?._id}`}>
          <button className="px-2 py-1.5 rounded bg-accent text-fill text-sm">Edit Book</button>
        </Link>

        <button className="px-2 py-1.5 rounded bg-accent text-fill cursor-pointer ml-3 text-sm">Delete Book</button>
      </div>
      <div className="flex items-center justify-end">
        <input type="text" placeholder="Leave a Review" className="w-3/5 px-2 py-2 outline-none rounded border border-primary" />
        <button type="submit" className="cursor-pointer text-xl ml-2 rounded-full bg-accent px-2 py-2">
          <BsFillSendFill />
        </button>
      </div>
      <div className="font-medium mb-2 mt-4 flex items-center">
        <div className="text-xl mr-2">
          <MdReviews />
        </div>
        <p>Reviews of the book:</p>
      </div>
      {book?.reviews?.map((review, i) => (
        <SingleReview key={i} review={review} />
      ))}
    </div>
  );
};

export default Review;
