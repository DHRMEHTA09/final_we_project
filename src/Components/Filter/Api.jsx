import React,{useState,useEffect} from 'react';
import MovieBox from '../MainBox'
import FilterApi from './FilterApi';

const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=3cd9733ac22d34508da9e17d4a018daf";

function Api() {

  const[movies, setMovies]=useState([]);
  const[filtered, setFiltered]=useState([]);
  const [activeGenre,setActiveGenre] = useState(0);

  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
      setFiltered(data.results);
    })
  }, [])
  return (
    
      <div>
        <div style={{marginLeft:"16.5cm"}}>Search Movie By Tabs <br /><br /></div>
        
        <FilterApi popular={movies} setFiltered ={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre}/>
      <div className='grid' style={{
        display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ",gap:"20px"
      }}>
        
      {filtered.map((movieReq)=>
      <MovieBox key={movieReq.id}{...movieReq}/>)}
    </div>
    </div>
  );
}

export default Api;


