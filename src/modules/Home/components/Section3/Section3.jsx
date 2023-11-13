import React from 'react'
import './Section3.css'
import ic5 from './../../../../assets/images/ic5.png'
import ic6 from './../../../../assets/images/ic6.webp'
import ic3 from './../../../../assets/images/ic3.webp'
import centerimg from './../../../../assets/images/center-img_eb064c43-efaf-4d56-90df-f89acfdf85fe.webp'
import ic1 from './../../../../assets/images/ic1.webp'
import ic4 from './../../../../assets/images/ic4.webp'
import ic2 from './../../../../assets/images/ic2.png'
const Section3 = () => {
  return (

    <section className='three mt-5 '>
        <div className='three-parent'>
          <h5 className='text-center fs-2'>INNOVATIVE QUALITIES & FEATURES</h5>
          <p className='text-secondary text-center fs-4 p-threeparent'>SHOW YOURS TO THE WORLD</p>
            <div className='three-child d-flex justify-content-center align-items-center text-center'>
                <div className='three-child2 mt-5'>
                    <div className='hd d-flex text-center justify-content-center align-items-center'>
                        <div className='hd-child'>
                        <h4>INTELLIGENT PROCESSOR</h4>
                         <p className="text-secondary">Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri</p>
                        </div>
                        <img src={ic5} />
                    </div>
                    <div className='hd mt-5 d-flex justify-content-center align-items-center text-center'>
                        <div className='hd-child'>
                        <h4>HD SURROUND AUDIO</h4>
                          <p className="text-secondary">Sagittis eu volutpat odio ante ut diam quam metus dictfacilisis mauris sit am.</p>
                        </div>
                        <img src={ic6}/>
                    </div>
                    <div className='hd mt-5 d-flex text-center justify-content-center align-items-center'>
                        <div className='hd-child'>
                            <h4>STYLISH BEVEL EDGES</h4>
                            <p>Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid</p>
                        </div>
                        <img src={ic3}/>
                    </div>
                </div>
                <div className=" centerimg">
                    <img src={centerimg}/>
                </div>
                <div className="three-child2 mt-5">
                <div className="hd mt-5 d-flex text-center">
                  <img src={ic1}/>
                  <div className="about">
                    <h4>HD SURROUND AUDIO</h4>
                  <p className="text-secondary">Sagittis eu volutpat odio ante ut diam quam metus dictfacilisis mauris sit am.</p>
                  </div>
                  
              </div>
              <div className="hd mt-5 d-flex text-center">
                <img src={ic4}/>
                <div className="about">
                  <h4>HD SURROUND AUDIO</h4>
                <p className="text-secondary">Sagittis eu volutpat odio ante ut diam quam metus dictfacilisis mauris sit am.</p>
                </div>
                
            </div>
            <div className="hd mt-5 d-flex text-center">
              <img src={ic2}/>
              <div className="about">
                <h4>HD SURROUND AUDIO</h4>
              <p className="text-secondary">Sagittis eu volutpat odio ante ut diam quam metus dictfacilisis mauris sit am.</p>
              </div>
              
          </div>
            </div>
        </div>
        </div>
    </section>
    
  )
}

export default Section3