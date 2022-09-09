import { createContext, useState } from "react";
import axios from "axios";
import { API_URL } from "../API";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [books, setBooks] = useState([]);

  const addToFavorites = (book) => {
    if (!favorites.includes(book))
      setFavorites((prevState) => [...prevState, book]);
  };

  const removeFromFavorites = (id) => {
    const oldFavorites = [...favorites];
    const newFavorites = oldFavorites.filter((book) => book.id !== id);
    setFavorites(newFavorites);
  };

  const fetchBooks = () => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <AppContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        books,
        fetchBooks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
