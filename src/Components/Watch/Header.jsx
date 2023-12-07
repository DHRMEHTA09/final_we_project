import React from "react";
import { Link } from "react-router-dom";
import "./Watch.css"

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          
          <div className="brand">
            <Link to="/">WatchIt</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/movie">Movie</Link>
            </li>
            <li>
              <Link to="/watchlist">Watch List</Link>
            </li>
            

            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <li>
              <Link to="/" onClick={() => setOpen(true)}>
               Login
              </Link>
            </li>

            <li>
              <Link to="/add" className="btn btn-main">
                + Add
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </header>
  );
};