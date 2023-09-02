import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import AddProduct from "../components/AddProduct/AddProduct";
import ListProduct from "../components/ListProduct/ListProduct";
import EditProduct from "../components/EditProduct/EditProduct";
import Player from "../components/Player/Player";

const MainRoutes = () => {
  let PUBLIC = [
    { link: "/", element: <Home />, id: 1 },
    { link: "/add", element: <AddProduct />, id: 2 },
    { link: "/list", element: <ListProduct />, id: 3 },
    { link: "/edit/:id", element: <EditProduct />, id: 4 },
    { link: "/player/:id", element: <Player />, id: 5 },
  ];
  return (
    <>
      <Routes>
        {PUBLIC.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
