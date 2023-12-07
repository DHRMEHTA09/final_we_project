import React, { useEffect } from "react";
import Button from "@mui/material/Button";

function Tab({ setActiveGenre, activeGenre, setFiltered, popular, handleGenreClick }) {

  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }

    const filtered = popular.filter((movie) => movie.genre_ids.includes(activeGenre));
    setFiltered(filtered);

  }, [activeGenre, popular]);

  const genres = [
   
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Fiction" },
    { id: 53, name: "Thriller" },
   
  ];


  return (
   

    <div className="filter-container" style={{marginLeft:"1.5cm"}}>
      
      {genres.map((genre) => (
        <Button
          key={genre.id}
          onClick={() => handleGenreClick(genre.id)}
          variant="contained"
          style={{ margin: "5px",backgroundColor: activeGenre === genre.id ? "white" : "",color:activeGenre ===genre.id?"#42a5f5":"" }}
        >
          {genre.name}
        </Button>
      ))}
      <br />
      <br />
    </div>
  );
}

export default Tab;

