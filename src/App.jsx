import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from './Components/Watch/Header'
import {Watchlist} from './Components/Watch/Watchlist'
import { Watched } from "./Components/Watch/Watched";
import { Add } from "./Components/Watch/Add";
import Movie from "./Movie"
import { GlobalProvider } from './Components/context/GlobalState'
import LoginDialog from './Components/login/LoginDialog'
import './App.css'
import SignUp from './Components/login/SignUp'

function App() {
  return (

    <>
     
    <GlobalProvider>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<LoginDialog/>} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/add" element={<Add />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </Router>
    </GlobalProvider>
   
    </>
  )
}

export default App

