import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";

import "./App.css";
import EditPost from "./pages/ EditPost";
import PostDetails from "./pages/PostDetails";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <nav style={{ margin: "5px" }}>
        <NavLink to="/" style={{ padding: "5px" }}>
          Home
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/posts/:id" element={<PostDetails />}></Route>
        <Route path="/posts/:id/edit" element={<EditPost />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
