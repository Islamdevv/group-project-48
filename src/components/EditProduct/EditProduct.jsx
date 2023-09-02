import React, { useEffect, useState } from "react";
import { useMovies } from "../../context/MoviesContextProvider";
import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { Toolbar } from "@mui/material/Toolbar";
import { green } from "@mui/material/colors";

const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [country, setCountry] = useState("");
  const [genre, setGenre] = useState("");
  const [descr, setDescr] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const { getOneMovies, editMovies, oneMovies } = useMovies();

  const { id } = useParams();

  useEffect(() => {
    getOneMovies(id);
  }, []);
  console.log(oneMovies);

  useEffect(() => {
    if (oneMovies) {
      setTitle(oneMovies.title);
      setYear(oneMovies.year);
      setCountry(oneMovies.country);
      setGenre(oneMovies.genre);
      setDescr(oneMovies.descr);
      setImage(oneMovies.image);
      setVideo(oneMovies.video);
    }
  }, [oneMovies]);

  function saveMovies() {
    let editedMovies = {
      title: title,
      year: year,
      country: country,
      genre: genre,
      descr: descr,
      image: image,
      video: video,
    };
    editMovies(id, editedMovies);
  }

  return (
    <div className="block">
      <div className="main_block">
        <h2 className="title-create">Update</h2>
        <div className="input-box">
          <input
            className="input-create"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            className="input-create"
            type="text"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            className="input-create"
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            className="input-create"
            type="text"
            placeholder="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            className="input-create"
            type="text"
            placeholder="Description"
            value={descr}
            onChange={(e) => setDescr(e.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            className="input-create"
            type="text"
            placeholder="Image"
            value={image}
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
            onClick={saveMovies}
            className="btn-create"
            variant="contained"
            color="success"
          >
            save
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EditProduct;
