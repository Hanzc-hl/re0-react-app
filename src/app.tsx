import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicLayout from "./layouts/BasicLayout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import "./app.less";

const app = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default app;
