import React from "react";
import {useGetWishListsQuery} from "../redux/features/wishlist/wishlistApi";
import {useAppSelector} from "../redux/hooks";

import {IWish} from "../interfaces/wishList";
import SingleWish from "../components/WishList/SingleWish";

const WishList = () => {
  const {id} = useAppSelector((state) => state.auth.user);
  const {data} = useGetWishListsQuery(id);
  return (
    <div className=" lg:container py-4">
      <div className="w-9/12 bg-second mx-auto rounded py-6 px-12">
        <p className="text-lg font-semibold mb-3">My WishList of Books:</p>
        <ul>
          {data?.data?.map((wish: IWish, i: number) => (
            <SingleWish key={i} wish={wish} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WishList;
