import {createBrowserRouter} from "react-router-dom";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Home from "../pages/Home";
import App from "../App";
import AllBooks from "../pages/AllBooks";
import SignUp from "../pages/SignUp";
import AddBook from "../pages/AddBook";
import EditBook from "../pages/EditBook";
import BookDetails from "../pages/BookDetails";
import PrivateRoute from "./PrivateRoute";
import WishList from "../pages/WishList";
import ReadList from "../pages/ReadList";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/allbooks",
        element: <AllBooks />,
      },
      {
        path: "/add-new-book",
        element: (
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/edit-book/:editId",
        element: (
          <PrivateRoute>
            <EditBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/book-details/:id",
        element: (
          <PrivateRoute>
            <BookDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/read-list",
        element: (
          <PrivateRoute>
            <ReadList />
          </PrivateRoute>
        ),
      },
      {
        path: "/wish-list",
        element: (
          <PrivateRoute>
            <WishList />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
