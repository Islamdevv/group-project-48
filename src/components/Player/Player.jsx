import React, { useEffect, useState } from "react";
import { useMovies } from "../../context/MoviesContextProvider";
import { useParams } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import "./Player.scss";
const Player = () => {
  const {
    oneMovies,
    getOneMovies,
    data,
    readMovies,
    addComment,
    readComment,
    comments,
    delComment,
  } = useMovies();
  const { id } = useParams();
  const [descrMovie, setDescrMovie] = useState(300);
  const [comment, setComment] = useState("");

  useEffect(() => {
    getOneMovies(id);
    readComment();
  }, []);

  function handlComment() {
    let obj = {
      comment: comment,
    };
    if (comment.trim() !== "") {
      return addComment(obj);
    } else {
      return alert("заполните поле!!!");
    }
  }

  return (
    <div className="player">
      <div className="info">
        <div className="main-info">
          <img className="info-img" src={oneMovies.image} alt="" />
          <div className="info-text">
            <div className="one-info">
              <p className="info-title">Название</p>
              <p>{oneMovies.title}</p>
            </div>
            <div className="one-info">
              <p className="info-title">Год</p>
              <p>{oneMovies.year}</p>
            </div>
            <div className="one-info">
              <p className="info-title">Жанр</p>
              <p>{oneMovies.genre}</p>
            </div>
            <div className="one-info">
              <p className="info-title">Страна</p>
              <p>{oneMovies.country}</p>
            </div>
          </div>
        </div>
        {oneMovies.descr === 0 ? null : (
          <div className="info-descr">
            <h3>
              <span style={{ color: "blue", margin: "0" }}>П</span>ро фильм
            </h3>
            <p>
              {descrMovie === 300
                ? oneMovies.descr?.slice(0, 329)
                : oneMovies.descr}
              {descrMovie === 300 ? (
                <span
                  onClick={() => {
                    setDescrMovie(oneMovies.descr.length);
                  }}
                >
                  Подробнее...
                </span>
              ) : (
                <span onClick={() => setDescrMovie(300)}>Скрыть</span>
              )}
            </p>
          </div>
        )}
      </div>
      <div className="player2">
        <div
          style={{
            width: "100%",
            height: { lg: "700px" },
            margin: "40px 0 0 0",
          }}
        >
          <iframe
            style={{ width: "100%", height: "550px" }}
            src={oneMovies.video}
            loading="lazy"
            frameBorder="0"
            scrolling="no"
            allowFullScreen="allowFullScreen"
          ></iframe>
        </div>
      </div>
      <div
        className="comment"
        style={{ background: "#181d23", margin: "20px 0 0 0" }}
      >
        <h3 style={{ color: "white" }}>
          <span style={{ color: "blue" }}>К</span>омментарии
        </h3>
        <div>
          <input
            type="text"
            style={{ width: "60%", height: "30px" }}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            style={{
              padding: "5px 20px",
              fontSize: "18px",
              margin: "0 0 0 10px",
              background: "#4779f0",
              border: "none",
              color: "#fff",
              fontWeight: "700",
            }}
            onClick={handlComment}
          >
            create
          </button>
        </div>
        <div style={{ margin: "20px 0 0 0" }}>
          {comments.map((el) => (
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  margin: "5px 0 5px 0",
                }}
              >
                <PersonIcon sx={{ color: "#fff" }} />
                <h4 style={{ color: "#fff" }}>Eldiyar</h4>
              </div>
              <div
                style={{
                  width: "58%",
                  height: "50px",
                  border: "1px solid blue",
                  padding: "10px",
                }}
              >
                <h3 style={{ color: "#fff" }}>{el.comment}</h3>
                <button onClick={() => delComment(el.id)}>delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Player;
