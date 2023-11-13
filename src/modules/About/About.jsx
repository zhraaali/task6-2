import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './About.css'
import abimg from './../../assets/images/filip-baotic-g2AaE9ONQyQ-unsplash.jpg'
const About = () => {
  return (
    <div className='zh-card'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={abimg} style={{height:'18rem'}} />
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

export default About