import {IBook} from "./book";
import {IUser} from "./user";

export interface IWish {
  user: string | IUser;
  book: string | IBook;
}
export interface IWishProps {
  wish: IWish;
}
export interface IRead {
  user: string | IUser;
  book: string | IBook;
  _id?: string;
  status: "Reading" | "Plan to Read" | "Finished";
}
export interface IReadProps {
  read: IRead;
}
