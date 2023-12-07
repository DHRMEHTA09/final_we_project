import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import MovieBox from '../MainBox';
import {blue} from "@mui/material/colors";
const Search = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const shade = blue[400]

  const searchMovie = async (e) => {
    e.preventDefault();

   
    setMovies([]);
    setError('');

    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=3cd9733ac22d34508da9e17d4a018daf&query=${query}`);
      const data = await response.json();

      if (data.results) {
        setMovies(data.results);
      } else {
        setError(data.status_message || 'No results found.');
      }
    } catch (error) {
      console.error('Error fetching movie data:', error);
      setError('An error occurred while fetching movie data.');
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
        <div style={{marginLeft:"17cm"}}> Search Movies <br/></div>
       <div style={{marginLeft:"12.5cm"}}>
      <br />
      <form className="d-flex" onSubmit={searchMovie} autoComplete="off" >
        <TextField
          type="search"
          placeholder="Movie Search"
          className="me-2"
          aria-label="search"
          name="query"
          value={query}
          onChange={changeHandler}
          sx={{backgroundColor:"#032541",width:"500px",height:"50px",borderRadius:"20px"}}
        />
        <Button variant="contained" color="info" type="submit" sx={{height:"50px",borderRadius:"20px"}}>
          Search
        </Button>
        <br />
      </form>
      </div>
      {error && <Typography variant="h6" color="error">{error}</Typography>}
      
      <div >
       
      <br />
      <div className='grid' style={{
        display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr", gap: "20px"
      }}>
        
        {movies.map((movieReq) =>
          <MovieBox key={movieReq.id} {...movieReq} />)
        }
      </div>
      </div>
    </div>
  );
};

export default Search;


