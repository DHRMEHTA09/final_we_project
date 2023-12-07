import React,{useState,useEffect} from 'react';
import MovieBox from '../MainBox';

// import 'bootstrap/dist/css/bootstrap.min.css';


const API_URL="https://api.themoviedb.org/3/trending/movie/week?api_key=3cd9733ac22d34508da9e17d4a018daf";

function TrendingApiFetch() {

  const[movies, setMovies]=useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
  }, [])
  return (
    <div className='container'>
      <div className='grid'>
      {movies.map((movieReq)=>
      <MovieBox key={movieReq.id}{...movieReq}/>)}
    </div>
    </div>
  );
}

export default TrendingApiFetch;


