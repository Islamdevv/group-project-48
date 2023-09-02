import React, { useState } from "react";
import { useMovies } from "../../context/MoviesContextProvider";
import { Link, useNavigate } from "react-router-dom";
import "./AddProduct.scss";
import { Button } from "@mui/material";
const AddProduct = () => {
  const navigate = useNavigate();
  const { addMovies } = useMovies();
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [country, setCountry] = useState("");
  const [genre, setGenre] = useState("");
  const [descr, setDescr] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");

  function createMovies() {
    let newMovies = {
      title: title,
      year: year,
      country: country,
      genre: genre,
      descr: descr,
      image: image,
      video: video,
    };
    addMovies(newMovies);
  }

  return (
    <div className="block">
      <div className="main_block">
        <h2 className="title-create">Create</h2>
        <div className="input-box">
          <input
            className="input-create"
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            className="input-create"
            type="text"
            placeholder="Year"
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            className="input-create"
            type="text"
            placeholder="Country"
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            className="input-create"
            type="text"
            placeholder="genre"
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            className="input-create"
            type="text"
            placeholder="Description"
            onChange={(e) => setDescr(e.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            className="input-create"
            type="text"
            placeholder="Image"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            className="input-create"
            type="text"
            placeholder="Video"
            value={video}
            onChange={(e) => setVideo(e.target.value)}
          />
        </div>
        <Link to="/list">
          <Button
            className="btn-create"
            variant="contained"
            color="success"
            onClick={createMovies}
          >
            create
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AddProduct;
