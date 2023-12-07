import { useEffect } from "react";
// import "./Filter.css"
import Button from "@mui/material/Button";




function FilterApi({ setActiveGenre, activeGenre , setFiltered, popular}) {

  useEffect(() => {
  if(activeGenre === 0){
    setFiltered(popular);
    return;
  }

  const filtered =popular.filter((movie) => movie.genre_ids.includes(activeGenre));
  setFiltered(filtered);

},[activeGenre])
const genres = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
  ];
  return (
    <div className="filter-container">
      <Button onClick={() => setActiveGenre(0)}
       variant="contained"
      style={{ margin: "5px" }}>
        All
      </Button>
      

{genres.map((genre) => (
        <Button
          key={genre.id}
          onClick={() =>setActiveGenre(genre.id)}
          variant="contained"
          style={{ margin: "5px" }}
        >
          {genre.name}
        </Button>
      ))}
      <br />
      <br />
    </div>
  );
}

export default FilterApi


