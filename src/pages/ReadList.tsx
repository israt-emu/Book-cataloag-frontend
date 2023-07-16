import React from "react";
import {useAppSelector} from "../redux/hooks";
import {useGetReadlistQuery} from "../redux/features/readlist/readListApi";
import {IRead} from "../interfaces/wishList";
import SingleRead from "../components/readList/SingleRead";

const ReadList = () => {
  const {id} = useAppSelector((state) => state.auth.user);
  const {data, isLoading, isError} = useGetReadlistQuery(id);
  return (
    <div className=" lg:container py-4">
      <div className="w-9/12 bg-second mx-auto rounded py-6 px-12">
        <p className="text-lg font-semibold mb-3">My Reading list of Books:</p>
        <ul>
          {data?.data?.map((read: IRead, i: number) => (
            <SingleRead key={i} read={read} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReadList;
