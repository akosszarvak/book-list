import React, { useState } from "react";
import Book from "../book/Book";
import "./BookList.scss";
import ReactPaginate from "react-paginate";

function BookList({ books }) {
  const [pageNumber, setPageNumber] = useState(0);

  const booksPerPage = 16;
  const pagesVisited = pageNumber * booksPerPage;

  const displayBooks = books
    .slice(pagesVisited, pagesVisited + booksPerPage)
    .map((book) => (
      <div className="card">
        <Book key={book.id} book={book} />
      </div>
    ));

  const pageCount = Math.ceil(books.length / booksPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div>
      <div className="book-list">{displayBooks} </div>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBtns"}
        previousLinkClassName={"prevBtn"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        pageLinkClassName={"linkClassname"}
      />
    </div>
  );
}

export default BookList;
