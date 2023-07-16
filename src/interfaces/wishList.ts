import {IBook} from "./book";
import {IUser} from "./user";

export interface IWish {
  user: string | IUser;
  book: string | IBook;
}
export interface IWishProps {
  wish: IWish;
}
