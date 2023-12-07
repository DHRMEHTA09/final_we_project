



import React, { useState } from "react";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';

const API_IMG = "https://image.tmdb.org/t/p/w500/";
const MovieBox = ({ title, poster_path, vote_average, release_date, overview }) => {
 const [show, setShow] = useState(false);

 const handleShow = () => setShow(true);
 const handleClose = () => setShow(false);
 return (
    <>
      
      <Card sx={{ maxWidth: 500, height: 240 }}>

      <Card sx={{ maxWidth: 345, height: 200 }}>

        <CardMedia
          sx={{ height: "100%", backgroundImage: `url(${API_IMG + poster_path})`,
                backgroundSize: "cover",
                backgroundPosition: "center center" }}
          image={API_IMG + poster_path}
          title={title}
        />
          
        
      </Card>
      

      <React.Fragment>
        <Button variant="outlined" onClick={handleShow} sx={{padding:"2px",marginLeft:"20px",border:"0px",color:"#42A5F5",fontWeight:"bold" }}>
          View More
        </Button>
       
  <Dialog
    open={show}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
  >
    
    <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
    <DialogContent sx={{ textAlign: 'center' }}>
      <img className="card-img-top" style={{ width: "14rem" }} src={API_IMG + poster_path} alt={title} />
      <p>
        <h5>
          Ratings: {vote_average}
          <br />
          Release Date: {release_date}
        </h5>
        <h6>Overview: {overview}</h6>
      </p>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Close</Button>
    </DialogActions>
  </Dialog>
  
</React.Fragment>


    
      </Card>
      

      
    </>
 );
};
export default MovieBox;


