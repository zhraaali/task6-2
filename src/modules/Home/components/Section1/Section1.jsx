import React from 'react'
import './Section1.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import cardimg1 from './../../../../assets/images/ic12.webp'
import cardimg2 from './../../../../assets/images/ic11.webp'
import cardimg3  from './../../../../assets/images/ic13.webp'
const Section1 = () => {
  return (
    <div className='one mt-5'>
    <div className='different'>
        <p>WHAT MAKES THE ESSENTIAL DIFFERENT</p>
        <p className='text-secondary fs-5'>EXPERIENCE  HIGH  PERFORMANCE  AND   SECURE</p>
        <div className='different-cards'>
        <CardGroup>
      <Card className='card'>
      
        <Card.Img variant="top" src={cardimg1}/>
        
        <Card.Body>
          <Card.Title className='card-title'>Card title</Card.Title>
          <Card.Text className='card-text'>
            This is a wider card 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <p>this is PERFORMANCE</p>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={cardimg2} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <p>this is PERFORMANCE</p>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={cardimg3} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <p>this is PERFORMANCE</p>
        </Card.Footer>
      </Card>
    </CardGroup>

        </div>

        </div>
    </div>
  )
}

export default Section1