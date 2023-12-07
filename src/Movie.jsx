import React from 'react'
import ReactDOM from 'react-dom'
import ApiFetch from './Components/ApiFetch'
import ActionApiFetch from './Components/GenreApiFetch/ActionApiFetch'
import HorrorApiFetch from './Components/GenreApiFetch/HorrorApiFetch'
import MusicApiFetch from './Components/GenreApiFetch/MusicApiFetch'
import ThrillerApiFetch from './Components/GenreApiFetch/ThrillerApiFetch'
import Api from './Components/Filter/Api'
import ApiTab from './Components/Filter/ApiTab'
import Footer from './Components/Footer/Footer'
import Search from './Components/Search/Search'
import MovieCarousel from './Components/carousel/MovieCarousel'


function Movie() {
  return (
    <>
   
    <MovieCarousel/>
    <br />
   <Search/>
    <br />
    <Api/>
    <br />
    <ApiTab/>
    
    <br />
    <br />
    <Footer/>
    </>
  )
}
export default Movie;