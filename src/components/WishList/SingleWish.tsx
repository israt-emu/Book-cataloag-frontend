import React from "react";
import {IWishProps} from "../../interfaces/wishList";
import {useGetSingleBookQuery} from "../../redux/features/book/bookApi";
import {FaHeart} from "react-icons/fa";
import {IBook} from "../../interfaces/book";

const SingleWish = ({wish}: IWishProps) => {
  const book = wish?.book;
  const {data} = useGetSingleBookQuery({id: (book as IBook)?._id});
  return (
    <li className="flex items-center gap-2">
      <div className="text-lg text-accent">
        <FaHeart />
      </div>
      <p>
        {data?.data?.title} by <span className="font-semibold">{data?.data?.author}</span>
      </p>
    </li>
  );
};

export default SingleWish;
