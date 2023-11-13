import React from 'react'
import './Section5.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'
const Section5 = () => {
  return (
    
    <section className='six mt-5'>
      <div className='parnt pt-5 d-flex flex-column justify-content-center'>
        <h4 className='text-white text-center pb-2'>SUBSCRIBE NOW</h4>
        <h2 className='text-white text-center pb-2'>GET OUR UPDATES ALWAYS FAST</h2>
        <p className='text-white text-center'>YOUR PERSONAL DATA WILL ALWAYS BE SAFE</p>
        <div className='email d-flex justify-content-center position-relative'>
        <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
        <div className="buton position-absolute">
        <a href="#"><FontAwesomeIcon icon={faCircleChevronRight} /></a>
        </div>
        </div>
        <div className="footer d-flex mt-5 px-3 justify-content-center flex-wrap">
            <h4 className="border-end px-2 ">SEARCH </h4>
            <h4 className="border-end px-2 ">SEARCH </h4>
            <h4 className="border-end px-2 ">SEARCH </h4>
            <h4 className="border-end px-2 ">SEARCH </h4>
            <h4 className="border-end  px-2">SEARCH </h4>
            
          </div>
      </div>
    </section>
  )
}

export default Section5