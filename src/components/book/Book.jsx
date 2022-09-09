import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Book.scss";
import AppContext from "../../context/appContext";

function Book({ book }) {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(AppContext);

  const navigate = useNavigate();
  const checkFavorites = (book) => {
    return favorites.includes(book);
  };
  return (
    <div className="book">
      <h4 className="title" onClick={() => navigate(`/books/${book.id}`)}>
        {book.title}
      </h4>

      <div className="cover">
        <img src={book.image_url} />
      </div>

      {checkFavorites(book) ? (
        <button className="btn" onClick={() => removeFromFavorites(book.id)}>
          remove from favorites
        </button>
      ) : (
        <button className="btn" onClick={() => addToFavorites(book)}>
          add to favorites
        </button>
      )}
    </div>
  );
}

export default Book;
