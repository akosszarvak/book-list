import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Main from "../Pages/Main";
import Favorites from "../Pages/Favorites";
import BookDetail from "../Pages/BookDetail";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Main />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/books/:id" element={<BookDetail />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
