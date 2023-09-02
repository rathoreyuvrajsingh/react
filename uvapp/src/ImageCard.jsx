import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

let Count =0;


const ImageCard = (props) => {
  const[Count,SetCount]= useState(0);

  const HandleClick = ()=> {
  
    SetCount(Count+1);
    
    console.log("Button Clicked", Count);
  
  };
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imgsrc} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Title>Price {props.price}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
        
        <Button onClick={HandleClick} variant="primary">Add To Cart</Button>
        <Button onClick={HandleClick} variant="primary">Remove</Button>

        {Count}
      </Card.Body>
    </Card>
      
    </div>
  )
}

export default ImageCard;
 