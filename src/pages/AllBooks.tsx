import {useEffect, useState} from "react";
import BookSidebar from "../components/Books/BookSidebar";
import Books from "../components/Books/Books";
import {useGetBooksQuery} from "../redux/features/book/bookApi";
import {useAppSelector} from "../redux/hooks";

const AllBooks = () => {
  const queryParams: Array<string> = [];
  const [url, setUrl] = useState("");
  const {data, isLoading, isError, error} = useGetBooksQuery(url, {
    refetchOnMountOrArgChange: true,
  });
  const {searchText, genre, publicationYear} = useAppSelector((state) => state.filter);

  useEffect(() => {
    if (searchText !== "") {
      queryParams.push(`searchTerm=${encodeURIComponent(searchText)}`);
    }
    // Add the genre to the query parameters if it exists
    if (genre !== "") {
      queryParams.push(`genre=${encodeURIComponent(genre)}`);
    }
    if (publicationYear !== "") {
      queryParams.push(`publicationYear=${encodeURIComponent(publicationYear)}`);
    }
    if (queryParams.length > 0) {
      setUrl(`${queryParams.join("&")}`);
    }
    if (!queryParams.length) {
      setUrl("");
    }
  }, [genre, publicationYear, queryParams, searchText, url]);
  return (
    <div>
      <section className="grid grid-cols-11 gap-5 lg:container px-2 mx-auto">
        <div className="col-span-3 bg-second p-4">
          <BookSidebar data={data?.data} />
        </div>
        <div className="col-span-8">
          <Books data={data?.data} isLoading={isLoading} isError={isError} />
        </div>
      </section>
    </div>
  );
};

export default AllBooks;
