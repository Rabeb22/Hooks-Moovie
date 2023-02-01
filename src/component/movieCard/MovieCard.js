
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";

const MovieCard = ({movie,del}) => {
  return (
    <div >
     <Card  style={{ width: '18rem' }} className="movie">
      <Card.Img className="image" variant="top" src={movie.posterURL}/>
      <Card.ImgOverlay className="info" style={{marginTop:'100px'}}>
        <Card.Title style={{color:'black',fontFamily:'Algerian',fontSize:'1erm'}}>{movie.title}</Card.Title>
        <Card.Text>
        
            <ReactStars
              count={movie.rating}
              size={24}
              isHalf={true}
              color="#ffd700"
            />
            <h6 style={{color:'black'}}>Release date : {movie.date}</h6>
        </Card.Text>
        
        <div className="buttons">
        <Button variant="primary">Details</Button>
        <Button variant="danger" onClick={()=>del(movie.id)}>Delete</Button>
        </div>
       
      </Card.ImgOverlay>
      
    </Card>
      
    </div>
  );
}

export default MovieCard;


