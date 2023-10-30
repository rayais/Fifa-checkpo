import React from 'react'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Player({props}) {
  return (
    <div>
        
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
           Team: {props.team} 
           Jersey number : {props.jnum}
        </Card.Text>
        <Card.Text>
          Age : {props.age}
        </Card.Text>
        <Card.Text>
          Nationality : {props.nationality}
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
  )
}

export default Player