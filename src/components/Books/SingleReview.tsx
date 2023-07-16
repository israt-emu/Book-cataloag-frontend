import React from "react";
import {IReviewProps} from "../../interfaces/book";
import avatar from "../../assets/avatar.jpg";
const SingleReview = ({review}: IReviewProps) => {
  return (
    <div className="flex items-center my-3">
      <div className=" mr-3">
        <img src={avatar} alt="" className="w-8 h-8 rounded-full" />
      </div>
      <div className="">
        <p></p>
        <p>{review?.review}</p>
      </div>
    </div>
  );
};

export default SingleReview;
