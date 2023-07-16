import React, {useState, useEffect} from "react";
import {useAddBookMutation} from "../../redux/features/book/bookApi";
import {useAppSelector} from "../../redux/hooks";
import {IBook} from "../../interfaces/book";
import Swal from "sweetalert2";

const AddBookForm = () => {
  const [addBook, {data, isLoading, isError}] = useAddBookMutation();
  const {id: userId} = useAppSelector((state: {auth: {user: any}}) => state.auth.user);
  const [formData, setFormData] = useState<Partial<IBook>>({});

  const handleInputChange = (e: {target: {name: string; value: number | string}}) => {
    const {name, value} = e.target;
    setFormData((prevformData) => ({
      ...prevformData,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    formData.addedBy = userId!;
    addBook(formData);
  };
  useEffect(() => {
    if (data?.success) {
      Swal.fire("Great!", "Book added succesfully!", "success");
      setFormData({});
    } else if (!data?.success && isError) {
      Swal.fire("Oops!", "Something went wrong!", "error");
    }
  }, [data, isError]);
  return (
    <section className="p-6 bg-second rounded-md w-9/12 mx-auto">
      <form className="container flex flex-col mx-auto space-y-12 p-6" onSubmit={handleSubmit}>
        <fieldset className="grid grid-cols-4 gap-6 rounded-md shadow-sm">
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="title" className="text-sm">
                Title
              </label>
              <input defaultValue={formData?.title} id="title" name="title" type="text" placeholder="Title" className=" px-2 py-2 outline-none w-full rounded-md mt-2" disabled={isLoading} onChange={handleInputChange} required />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="author" className="text-sm">
                Author
              </label>
              <input id="author" name="author" type="text" placeholder="Author" className=" px-2 py-2 outline-none w-full rounded-md mt-2" defaultValue={formData?.author} disabled={isLoading} onChange={handleInputChange} required />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="genre" className="text-sm">
                Genre
              </label>
              <input id="genre" name="genre" type="text" placeholder="Genre" className=" px-2 py-2 outline-none w-full rounded-md mt-2" defaultValue={formData?.genre} disabled={isLoading} onChange={handleInputChange} required />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="date" className="text-sm">
                Publication Year
              </label>
              <input id="date" name="publicationYear" type="text" placeholder="Publication Year" className=" px-2 py-2 outline-none w-full rounded-md mt-2" defaultValue={formData?.publicationYear} disabled={isLoading} onChange={handleInputChange} required />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="img" className="text-sm">
                Image
              </label>
              <input id="img" type="text" name="image" defaultValue={formData?.image} placeholder="Image Link" className=" px-2 py-2 outline-none w-full rounded-md mt-2" disabled={isLoading} onChange={handleInputChange} />
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
