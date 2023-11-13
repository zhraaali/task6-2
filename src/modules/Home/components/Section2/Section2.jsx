import React from 'react'
import './Section2.css' 
import powerimg from './../../../../assets/images/powerimg.webp'
import batteryimg from './../../../../assets/images/ic8.png'
import cameraimg from './../../../../assets/images/ic9_db35a001-6739-4b9f-b1d9-12a825ddf8d9.webp'
import simcardimg from './../../../../assets/images/ic10.webp'
import processorimg from './../../../../assets/images/ic7.webp'
const Section2 = () => {
  return (
    <section className='two mt-5'>
        <div className='two-parent'>
        <h5 className="text-black text-center fs-1 fw-bolder" >POSSIBILITIES. PERFORMANCE. POWER.</h5>
            <h5 className="text-secondary text-center h5child" >FASTER PROCESSING WITH LESS POWER</h5>
        </div>
        <div className="img position-relative">
            <img src={powerimg}/>
            <div className="hotspot1 btn px-0 position-absolute">
              <a href="#"></a>
              <div className="vl1"></div>
              
                
              
            </div>
            
            <div className="hotspot2 btn px-0 position-absolute">
                <a href="#"></a>
                  <div className="vl2"></div> 
            
            </div>

            <div className="hotspot3 btn px-0 position-absolute">
                    <a href="#"></a>
                  <div className="vl3"></div> 
            
            </div>

            <div className="hotspot4 btn px-0 position-absolute">
                    <a href="#"></a>
                  <div className="vl4"></div> 
               
          </div>

            </div>
            <div className='contains d-flex justify-content-around'>
            <div className="powerimg d-flex flex-column justify-content-center">
              <img src={processorimg}/>
              <h5 className="mt-3 text-center">48 HRS BACKUP</h5>
            <p className="text-center">Natoque penatibus et magnis dis parturient montes nascetur.</p>
            </div>
            <div className="powerimg d-flex flex-column justify-content-center">
              <img src={simcardimg}/>
              <h5 className="mt-3 text-center">48 HRS BACKUP</h5>
            <p className="text-center">Natoque penatibus et magnis dis parturient montes nascetur.</p>
            </div>
            <div className="powerimg d-flex flex-column justify-content-center">
              <img src={cameraimg}/>
              <h5 className="mt-3 text-center">48 HRS BACKUP</h5>
            <p className="text-center">Natoque penatibus et magnis dis parturient montes nascetur.</p>
            </div>
            <div className="powerimg d-flex flex-column justify-content-center">
              <img src={batteryimg}/>
              <h5 className="mt-3 text-center">48 HRS BACKUP</h5>
            <p className="text-center">Natoque penatibus et magnis dis parturient montes nascetur.</p>
            </div>
            </div>
    </section>
  )
}

export default Section2