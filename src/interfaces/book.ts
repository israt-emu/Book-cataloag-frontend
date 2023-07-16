import {IUser} from "./user";

export interface Review {
  id: string;
  review: string;
}
export interface IBook {
  _id?: string;
  title?: string;
  author?: string;
  genre?: string;
  publicationYear?: string;
  reviews: Review[];
  image?: string;
}
export interface IBookProps {
  book: IBook;
}
export interface IBooksProps {
  data: IBook[];
}
export interface IBookSidebarProps {
  data: IBook[];
  isError: boolean;
  isLoading: boolean;
}
export interface IReview {
  id?: string | IUser;
  review?: string;
}
export interface IReviewProps {
  review: IReview;
}
