import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Typography } from '@mui/material';

const MovieCarousel = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
   
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=3cd9733ac22d34508da9e17d4a018daf');
        const data = await response.json();

        if (data.results) {
          setMovies(data.results);
        }
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovies();
  }, []);

  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow" style={{ position: 'absolute', bottom: '10px', right: '10px', zIndex: 1 }} onClick={onClick}>
        &rarr;
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow" style={{ position: 'absolute', bottom: '10px', left: '10px', zIndex: 1 }} onClick={onClick}>
        &larr;
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div style={{ position: 'relative' }}>

      {movies.length > 0 ? (
        <Slider {...settings}>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                alt={movie.title}
                style={{ width: '100%', height: '600px', objectFit: 'fill', backgroundPosition:"center center" }}
              />
            </div>
          ))}
        </Slider>
      ) : (
        <Typography variant="h6" color="error" align="center">
          Error loading movies.
        </Typography>
      )}
    </div>
  );
};

export default MovieCarousel;











