import BookSidebar from "../components/Books/BookSidebar";
import Books from "../components/Books/Books";

const AllBooks = () => {
  return (
    <div>
      <section className="grid grid-cols-11 gap-5 lg:container px-2 mx-auto">
        <div className="col-span-3 bg-second p-4">
          <BookSidebar />
        </div>
        <div className="col-start-4 col-end-12">
          <Books />
        </div>
      </section>
    </div>
  );
};

export default AllBooks;
