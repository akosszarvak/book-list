import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BOOK_DETAILED } from "../API";
import axios from "axios";

function BookDetail() {
  const [book, setBook] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${BOOK_DETAILED}/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div>
      {" "}
      <div className="back-arrow" onClick={() => navigate("/")}>
        &#8592;{" "}
      </div>
      <div className="book">
        <h2>{book.title}</h2>
        <img src={book.image_url} alt="" />
        <p>{book.description}</p>
      </div>
    </div>
  );
}

export default BookDetail;
