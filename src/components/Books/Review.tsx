import React, {useEffect, useState} from "react";
import {IBookReviewProps} from "../../interfaces/book";
import {Link, useNavigate} from "react-router-dom";
import {BsFillSendFill} from "react-icons/bs";
import {MdReviews} from "react-icons/md";
import SingleReview from "./SingleReview";
import Swal from "sweetalert2";
import {useAddReviewMutation, useDeleteBookMutation} from "../../redux/features/book/bookApi";
import {useAppSelector} from "../../redux/hooks";
const Review = ({book, refetch}: IBookReviewProps) => {
  const {id} = useAppSelector((state) => state.auth.user);
  const [deleteBook, {data, isError}] = useDeleteBookMutation();
  const [addReview, {data: reviewData, isError: reviewError}] = useAddReviewMutation();
  const authorizeUser = id === book?.addedBy;
  const navigate = useNavigate();
  //delete book
  const handleDelete = () => {
    Swal.fire({
      title: "Do you want to delete the book?",
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
        deleteBook(book?._id);
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  useEffect(() => {
    if (data?.success) {
      Swal.fire("Great!", "Book deleted succesfully!", "success");
      navigate("/allbooks");
    } else if (!data?.success && isError) {
      Swal.fire("Oops!", "Something went wrong!", "error");
    }
  }, [data, isError]);
  //add review
  const [review, setReview] = useState("");
  const handleAddReview = () => {
    if (review !== "") {
      addReview({
        id: book?._id,
        data: {
          user: id,
          review: review,
        },
      });
    } else {
      Swal.fire("", "Please write a review first!", "info");
    }
  };
  useEffect(() => {
    if (reviewData?.success) {
      Swal.fire("Great!", "You leave review succesfully!", "success");
      refetch();
    } else if (!reviewData?.success && reviewError) {
      Swal.fire("Oops!", "Something went wrong!", "error");
    }
  }, [reviewData, reviewError]);
  return (
    <div className="col-start-6 col-end-11 pl-4">
      <div className="flex justify-end items-center mb-3">
        <Link to={`/edit-book/${book?._id}`}>
          <button className="px-2 py-1.5 rounded bg-accent text-fill text-sm" disabled={!authorizeUser}>
            Edit Book
          </button>
        </Link>

        <button className="px-2 py-1.5 rounded bg-accent text-fill cursor-pointer ml-3 text-sm" onClick={handleDelete} disabled={!authorizeUser}>
          Delete Book
        </button>
      </div>
      <div className="flex items-center justify-end">
        <input type="text" placeholder="Leave a Review" className="w-3/5 px-2 py-2 outline-none rounded border border-primary" onChange={(e) => setReview(e.target.value)} />
        <button type="submit" className="cursor-pointer text-xl ml-2 rounded-full bg-accent px-2 py-2" onClick={handleAddReview}>
          <BsFillSendFill />
        </button>
      </div>
      <div className="font-medium mb-2 mt-4 flex items-center border-b border-primary pb-2">
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
