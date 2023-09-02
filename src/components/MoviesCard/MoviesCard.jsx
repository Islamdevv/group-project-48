import React, { useEffect } from "react";
import { useMovies } from "../../context/MoviesContextProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { useNavigate } from "react-router-dom";
import "./MoviesCard.scss";
const MoviesCard = ({ el }) => {
  const { readMovies, deleteMovies } = useMovies();

  const navigate = useNavigate();
  useEffect(() => {
    readMovies();
  }, []);
  return (
    <div className="card">
      <img src={el.image} alt="moviesIMG" />
      {/* <div className="card--text">
        <p>{el.title}</p>
      </div> */}
      <div className="card--btns">
        <button className="card--btns--del" onClick={() => deleteMovies(el.id)}>
          <DeleteIcon />
        </button>
        <button
          className="card--btns--edit"
          onClick={() => navigate(`/edit/${el.id}`)}
        >
          <EditNoteIcon />
        </button>
        <button
          className="card--btns--play"
          onClick={() => navigate(`/player/${el.id}`)}
        >
          <PlayCircleIcon />
        </button>
      </div>
    </div>
  );
};

export default MoviesCard;
