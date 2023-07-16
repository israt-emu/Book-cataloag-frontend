import React, {useEffect} from "react";
import {FaBook} from "react-icons/fa";
import {BsBookFill, BsBook} from "react-icons/bs";
import {BiSolidBookHeart} from "react-icons/bi";
import {IReadProps} from "../../interfaces/wishList";
import {useGetSingleBookQuery} from "../../redux/features/book/bookApi";
import {IBook} from "../../interfaces/book";
import {useUpdateStatusMutation} from "../../redux/features/readlist/readListApi";
import Swal from "sweetalert2";
const SingleRead = ({read}: IReadProps) => {
  const book = read?.book;
  const {data} = useGetSingleBookQuery({id: (book as IBook)?._id});
  const [updateStatus, {data: updateData, isError, error}] = useUpdateStatusMutation();

  const handleUpdateStatus = (status: string) => {
    Swal.fire({
      title: `Do you want to update status to ${status}?`,
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
        updateStatus({
          id: read?._id,
          data: {
            status: status,
          },
        });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  useEffect(() => {
    if (updateData?.success) {
      Swal.fire("Great!", `Status updated to ${updateData?.data?.status}`, "success");
    } else if (!updateData?.success && isError) {
      Swal.fire("Oops!", `Something went wrong`, "error");
    }
  }, [updateData, isError]);
  return (
    <li className="flex items-center gap-2 bg-fill  hover:shadow-xl shadow-sm p-4 rounded">
      <div className="text-lg text-accent">
        <FaBook />
      </div>
      <p className="border-r border-accent pr-2">
        {data?.data?.title} by <span className="font-semibold">{data?.data?.author}</span>
      </p>
      <div className="flex items-center gap-4 text-2xl">
        <BiSolidBookHeart title="Plan to Read" className={`${read?.status === "Plan to Read" ? "text-accent" : null} cursor-pointer`} onClick={() => handleUpdateStatus("Plan to Read")} />
        <BsBook title="Reading" className={`${read?.status === "Reading" ? "text-accent" : null} cursor-pointer`} onClick={() => handleUpdateStatus("Reading")} />
        <BsBookFill title="Finshed Reading" className={`${read?.status === "Finished" ? "text-accent" : null} cursor-pointer`} onClick={() => handleUpdateStatus("Finished")} />
      </div>
    </li>
  );
};

export default SingleRead;
