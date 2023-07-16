import React, {useEffect} from "react";
import {IBookProps} from "../../interfaces/book";
import {FaHeart} from "react-icons/fa";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks";
import {useAddWishListMutation} from "../../redux/features/wishlist/wishlistApi";
import Swal from "sweetalert2";
import {error} from "console";
import {IError} from "../../interfaces/error";
const BookCard = ({book}: IBookProps) => {
  const {title, genre, author, publicationYear, _id} = book;
  const {id} = useAppSelector((state) => state.auth.user);
  const [addWishList, {data, isLoading, isError, error}] = useAddWishListMutation();
  //add wish list
  const handleAddWishList = () => {
    Swal.fire({
      title: "Do you want to add this book to your wishlist?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
      customClass: {
        actions: "my-actions",
        cancelButton: "order-1 right-gap",
        confirmButton: "order-2",
        denyButton: "order-3",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        addWishList({
          user: id,
          book: _id,
        });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  useEffect(() => {
    if (data?.success) {
      Swal.fire("Great!", "Book added to your wishlist!", "success");
    } else if (!data?.success && isError) {
      if ((error as IError)?.data?.message === "Already added this book to wishlist!") {
        Swal.fire("Oops!", `${(error as IError)?.data?.message}`, "error");
      } else {
        Swal.fire("Oops!", `Something went wrong`, "error");
      }
    }
  }, [data, isError]);
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
        </div>
      </Link>
      <div className="flex items-center font-semibold rounded-md text-2xl text-accent p-6" onClick={handleAddWishList}>
        <FaHeart />
      </div>
    </div>
  );
};

export default BookCard;
