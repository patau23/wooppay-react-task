import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
//
import HomePage from "./pages/HomePage/HomePage.jsx";
import SearchPage from "./pages/SearchPage/SearchPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import Header from "./components/Header/Header.jsx";

import "./App.scss";
//

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:name" element={<SearchPage />} />
        <Route path="/not-found-404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to={"/not-found-404"} />} />
      </Routes>
    </>
  );
}
