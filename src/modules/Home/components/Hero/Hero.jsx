import React from 'react'
import './Hero.css'
import Carousel from 'react-bootstrap/Carousel';
import carouselimg1 from './../../../../assets/images/rishabh-malhotra-83ypHTv6J2M-unsplash(1).png'
import carouselimg2 from './../../../../assets/images/shiwa-id-Uae7ouMw91A-unsplash.png'
import carouselimg3 from './../../../../assets/images/thirdslide.png'
const Hero = (props) => {
  return (
    <div className='hero'>
     <Carousel data-bs-theme="dark">
      <Carousel.Item className='first-slide d-flex flex-row bg-black'>
        <img
         
          src={carouselimg1}
          alt="First slide"
        />
        <Carousel.Caption className='carousel-caption slide-text'>
          <h5 className='text-white fs-2'>ZANIA BLACK EDITION</h5>
          <p className=' text-white fs-1 fw-bold second-slide-text text-center'>CURVY BEVEL DUAL AUDIO</p>
          <button type="button" class="btn text-white  rounded-pill border-white btn-outline-danger">SHOP NOW</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='second-slide'>
        <img
         
          src={carouselimg2}
          alt="Second slide"
        />
        <Carousel.Caption className='carousel-caption slide-text'>
          <h5 className='text-black fs-2'>4K RESOLUTION</h5>
          <p className=' text-black fs-1 fw-bold second-slide-text text-center'>EXCLUSIVE STEEL FRAME</p>
          <button type="button" class="btn text-black  rounded-pill border-black btn-outline-danger">SHOP NOW</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='third-slide '>
        <img
         
          src={carouselimg3}
          alt="Third slide"
        />
        <Carousel.Caption className='carousel-caption slide-text'>
          <h5 className='text-white fs-2'>DELTA ZERTIGA PROCESSOR</h5>
          <p className=' text-white fs-1 fw-bold second-slide-text text-center'>
          FULL SCREEEN DISPLAY
          </p>
          <button type="button" class="btn text-white  rounded-pill border-white btn-outline-danger">SHOP NOW</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Hero