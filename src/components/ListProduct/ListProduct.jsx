import React, { useEffect } from "react";
import { useMovies } from "../../context/MoviesContextProvider";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./ListProduct.scss";
import PaginationMovies from "../Pagination/Pagination";
const ListProduct = () => {
  const { readMovies, data, currentData } = useMovies();

  useEffect(() => {
    readMovies();
  });

  return (
    <div className="cards">
      {data ? (
        currentData().map((el) => <MoviesCard key={el.id} el={el} />)
      ) : (
        <></>
      )}
      <PaginationMovies />
    </div>
  );
};

export default ListProduct;
