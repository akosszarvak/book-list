import React, { useContext, useEffect } from "react";
import BookList from "../components/booklist/BookList";
import AppContext from "../context/appContext";

function Main() {
  const { books, fetchBooks } = useContext(AppContext);

  useEffect(() => {
    if (books.length === 0) fetchBooks();
  }, []);

  return (
    <div>
      <BookList books={books} />
    </div>
  );
}

export default Main;
