import BookSidebar from "../components/Books/BookSidebar";

const AllBooks = () => {
  return (
    <div>
      <section className="grid grid-cols-11 gap-5 lg:container px-2 mx-auto">
        <div className="col-span-3 bg-second p-4">
          <BookSidebar />
        </div>
        <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsa voluptate sit quos sed perspiciatis ducimus asperiores est! Facere temporibus sint id, unde culpa aliquam vero alias dolorem vitae iste?</div>
      </section>
    </div>
  );
};

export default AllBooks;
