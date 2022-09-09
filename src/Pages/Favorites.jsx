import React, { useContext } from "react";
import AppContext from "../context/appContext";
import BookList from "../components/booklist/BookList";

function Favorites() {
  const { favorites } = useContext(AppContext);
  return <BookList books={favorites} />;
}

export default Favorites;
