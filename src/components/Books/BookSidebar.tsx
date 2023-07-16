import {useAppDispatch} from "../../redux/hooks";
import {IBook, IBooksProps} from "../../interfaces/book";
import {genreFilter, searched, yearFilter} from "../../redux/features/filters/filterSlice";
import {debounce} from "../../lib/utils";
import {useGetBooksQuery} from "../../redux/features/book/bookApi";

const BookSidebar = ({data}: IBooksProps) => {
  const dispatch = useAppDispatch();
  const handleSearch = debounce((value: string) => {
    // Perform search logic with the searchTerm
    dispatch(searched(value));
  }, 1000);
  //for genre option
  const {data: bookData} = useGetBooksQuery("");
  const genres: string[] = [];
  bookData?.data.forEach((book: IBook, i: number) => {
    if (!genres?.includes(book?.genre!)) {
      genres.push(book?.genre!);
    }
  });
  //add filtered data to redux
  const selectGenre = (value: string) => {
    dispatch(genreFilter(value));
    dispatch(yearFilter(""));
  };
  const selectYear = (value: string) => {
    dispatch(yearFilter(value));
  };

  return (
    <div>
      <input type="search" className="px-3 py-2 outline-none bg-fill rounded" placeholder="Search" onChange={(e) => handleSearch(e.target.value)} />
      <p className="my-2">Filter By:</p>
      <div className="flex items-center justify-between mb-2">
        <p className="">Genre:-</p>
        <select name="" id="" className="py-1 px-2 outline-none rounded capitalize" onChange={(e) => selectGenre(e.target.value)}>
          <option value="">Select a Genre</option>
          {genres?.map((s: string, i: number) => (
            <option key={i} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center justify-between">
        <p className="">Publication year:-</p>

        <select name="" id="" className="py-1 px-2 outline-none rounded" onChange={(e) => selectYear(e.target.value)}>
          <option value="">Select an year</option>
          {data?.map((s: IBook, i: number) => (
            <option key={i} value={s?.publicationYear}>
              {s?.publicationYear}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default BookSidebar;
