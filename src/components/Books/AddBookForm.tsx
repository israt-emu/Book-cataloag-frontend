import React from "react";

const AddBookForm = () => {
  return (
    <section className="p-6 bg-second rounded-md w-9/12 mx-auto">
      <form className="container flex flex-col mx-auto space-y-12 p-6">
        <fieldset className="grid grid-cols-4 gap-6 rounded-md shadow-sm">
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="title" className="text-sm">
                Title
              </label>
              <input id="title" type="text" placeholder="Title" className=" px-2 py-2 outline-none w-full rounded-md mt-2" />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="author" className="text-sm">
                Author
              </label>
              <input id="author" type="text" placeholder="Author" className=" px-2 py-2 outline-none w-full rounded-md mt-2" />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="genre" className="text-sm">
                Genre
              </label>
              <input id="genre" type="text" placeholder="Genre" className=" px-2 py-2 outline-none w-full rounded-md mt-2" />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="date" className="text-sm">
                Publication Date
              </label>
              <input id="date" type="date" placeholder="Publication Date" className=" px-2 py-2 outline-none w-full rounded-md mt-2" />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="img" className="text-sm">
                Image
              </label>
              <input id="img" type="text" placeholder="Image Link" className=" px-2 py-2 outline-none w-full rounded-md mt-2" />
            </div>
            <div className="col-span-full sm:col-span-3 lg:mt-8">
              <button type="submit" className="px-2 py-2 rounded bg-accent text-fill cursor-pointer text-sm">
                Add Book
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default AddBookForm;
