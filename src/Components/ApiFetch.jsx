import React,{useState,useEffect} from 'react';
import MovieBox from './MainBox';




const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=3cd9733ac22d34508da9e17d4a018daf";

function ApiFetch() {

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
    
      <div>
        <h5>Trending</h5>
      <div className='grid' style={{
        display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ",gap:"20px"
      }}>
        
      {movies.map((movieReq)=>
      <MovieBox key={movieReq.id}{...movieReq}/>)}
    </div>
    </div>
  );
}

export default ApiFetch;


// import React, { useState, useEffect } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import MovieBox from './MainBox';
// import './ApiFetch.css'; // Import a CSS file to apply custom styles

// const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=3cd9733ac22d34508da9e17d4a018daf";

// function ApiFetch() {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     fetch(API_URL)
//       .then((res) => res.json())
//       .then(data => {
//         console.log(data);
//         setMovies(data.results);
//       })
//   }, []);

//   return (
//     <div className="carousel-container">
//       <Carousel showThumbs={false} showStatus={false} showArrows={true} axis="horizontal">
//         {movies.map((movie) => (
//           <div key={movie.id}>
//             <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// }

// export default ApiFetch;
// import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import MovieBox from './MainBox';

// const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=3cd9733ac22d34508da9e17d4a018daf";

// function ApiFetch() {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     fetch(API_URL)
//       .then((res) => res.json())
//       .then(data => {
//         console.log(data);
//         setMovies(data.results);
//       })
//   }, []);

//   const sliderSettings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     adaptiveHeight: true, // Set adaptiveHeight to true for dynamic height
//   };

//   return (
//     <Slider {...sliderSettings}>
//       {movies.map((movie) => (
//         <div key={movie.id}>
//           <img
//             src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//             alt={movie.title}
//             style={{ width: '80%', height: "300px", objectFit: 'cover' }}
//           />
//         </div>
//       ))}
//     </Slider>
//   );
// }

// export default ApiFetch;
