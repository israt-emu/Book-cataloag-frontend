import React from "react";
import {useGetBooksQuery} from "../../redux/features/book/bookApi";
import {IBook} from "../../interfaces/book";
import CardSkeleton from "../ui/CardSkeleton";
import {Link} from "react-router-dom";
import BookCard from "./BookCard";
import Error from "../ui/Error";

const Books = () => {
  const {data, isLoading, isError, error} = useGetBooksQuery(undefined);
  console.log(data?.data);
  // decide what to render
  let content = null;

  if (isError) {
    content = <div className="mt-10">{<Error message="There was an error occured" />}</div>;
  }
  if (!isError && isLoading) {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-3 mt-4 ">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    );
  }
  if (!isError && !isLoading && data?.data?.length > 0) {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-5 mx-auto">
        {data?.data?.map((book: IBook) => (
          <BookCard key={book?._id} book={book} />
        ))}
      </div>
    );
  }
  if (!isError && !isLoading && data?.data?.length === 0) {
    content = <div className="grid grid-cols-1 justify-center items-center gap-4 mt-8 pb-8 w-11/12 mx-auto">No Books Found!</div>;
  }
  return <div>{content}</div>;
};

export default Books;
