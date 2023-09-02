import React, { createContext, useContext, useState } from "react";
import axios from "axios";

export const moviesContext = createContext();
export const useMovies = () => {
  return useContext(moviesContext);
};

const MoviesContextProvider = ({ children }) => {
  const API = "http://localhost:3000/products";
  const commentAPI = "http://localhost:3000/comments";

  const [data, setData] = useState([]);
  const [oneMovies, setOneMovies] = useState([]);
  const [comments, setComments] = useState([]);
  //! POST
  async function addMovies(newMovies) {
    await axios.post(API, newMovies);
  }
  //! GET
  async function readMovies() {
    let { data } = await axios(API);
    setData(data);
  }

  //! DELETE
  async function deleteMovies(id) {
    await axios.delete(`${API}/${id}`);
    readMovies();
  }

  //! GET ONE MOVIES
  async function getOneMovies(id) {
    let { data } = await axios(`${API}/${id}`);
    setOneMovies(data);
    readMovies();
  }
  //! UPDATE MOVIES
  async function editMovies(id, editedMovies) {
    await axios.patch(`${API}/${id}`, editedMovies);
    readMovies();
  }
  // ! Pagination
  const [page, setPage] = useState(1);
  let items = 6;
  let count = Math.ceil(data.length / items);
  function currentData() {
    let begin = (page - 1) * items;
    let end = begin + items;
    return data.slice(begin, end);
  }

  async function addComment(newComment) {
    await axios.post(commentAPI, newComment);
    readComment();
  }

  async function readComment() {
    let { data } = await axios(commentAPI);
    setComments(data);
  }
  async function delComment(id) {
    await axios.delete(`${commentAPI}/${id}`);
    readComment();
  }

  const values = {
    addMovies,
    readMovies,
    data,
    deleteMovies,
    getOneMovies,
    editMovies,
    oneMovies,
    currentData,
    page,
    setPage,
    count,
    addComment,
    readComment,
    comments,
    delComment,
  };

  return (
    <moviesContext.Provider value={values}>{children}</moviesContext.Provider>
  );
};

export default MoviesContextProvider;
