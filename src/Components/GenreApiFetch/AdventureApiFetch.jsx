import React, { useState, useEffect } from 'react'
import MovieBox from '../MainBox'

const API_URL =
  'https://api.themoviedb.org/3/discover/movie?api_key=3cd9733ac22d34508da9e17d4a018daf'
const GENRE_ID = '12' // 
function AdventureApiFetch() {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    // Fetch horror movies
    fetch(`${API_URL}&with_genres=${GENRE_ID}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results)
      })
      .catch((error) => {
        console.error('Error fetching Adventure movies:', error)
        setError(error)
      })
  }, [])

  if (error) {
    return <div>Error loading Adventure movies. Please try again later.</div>
  }

  return (
    <div>
        <h5>Adventure</h5>
      <div className='grid' style={{
        display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ",gap:"20px"
      }}>
        
      {movies.map((movieReq)=>
      <MovieBox key={movieReq.id}{...movieReq}/>)}
    </div>
    </div>
  )
}

export default AdventureApiFetch