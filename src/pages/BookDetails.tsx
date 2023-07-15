import {useParams} from "react-router-dom";
import Details from "../components/Books/Details";
import {useGetSingleBookQuery} from "../redux/features/book/bookApi";
import Review from "../components/Books/Review";

const BookDetails = () => {
  const {id} = useParams();
  const {data} = useGetSingleBookQuery({id});
  return (
    <div className="w-11/12 mx-auto grid grid-cols-10 items-start">
      <Details book={data?.data} />
      <Review book={data?.data} />
    </div>
  );
};

export default BookDetails;
