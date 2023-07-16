import React, {useEffect} from "react";
import {IBookProps} from "../../interfaces/book";
import {Link, useNavigate} from "react-router-dom";
import {BsFillSendFill} from "react-icons/bs";
import {MdReviews} from "react-icons/md";
import SingleReview from "./SingleReview";
import Swal from "sweetalert2";
import {useDeleteBookMutation} from "../../redux/features/book/bookApi";
const Review = ({book}: IBookProps) => {
  const [deleteBook, {data, isLoading, isError}] = useDeleteBookMutation();
  const navigate = useNavigate();
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

  return (
    <div className="col-start-6 col-end-11 pl-4">
      <div className="flex justify-end items-center mb-3">
        <Link to={`/edit-book/${book?._id}`}>
          <button className="px-2 py-1.5 rounded bg-accent text-fill text-sm">Edit Book</button>
        </Link>

        <button className="px-2 py-1.5 rounded bg-accent text-fill cursor-pointer ml-3 text-sm" onClick={handleDelete}>
          Delete Book
        </button>
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
