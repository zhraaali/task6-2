import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Service.css'
import svimg from './../../assets/images/background.jpg'
const Service = () => {
  return (
    <div className='zh-card'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={svimg} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Service