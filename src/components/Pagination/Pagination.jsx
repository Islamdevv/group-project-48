import { Box, Pagination, Stack } from "@mui/material";
import React from "react";
import { useMovies } from "../../context/MoviesContextProvider";

const PaginationMovies = () => {
  const { page, setPage, currentData, count } = useMovies();
  function handleChange(b, p) {
    setPage(p);
  }
  return (
    <Box
      style={{
        backgroundColor: "#181818",
        color: "#fff",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        fontSize: "30px",
        marginTop: "85px",
      }}
    >
      <Stack spacing={2} sx={{ marginRight: 5 }}>
        <Pagination
          onChange={handleChange}
          sx={{ button: { color: "#fff" } }}
          color="secondary"
          size="large"
          count={count}
        />
      </Stack>
    </Box>
  );
};

export default PaginationMovies;
