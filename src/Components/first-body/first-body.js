import React from 'react'
import image from '../../assets/images/first-body-image.png';
import './first-body.css'
export default function FirstBody() {
  return (
    <div className='first-body'>
        <div className='image-container'>
            <img src={image} alt='first-body' className='image'/>
        </div>
        <div className='cardboard-container'>
            <p>Get personalised home interiors <br/><span>in just 50 days</span></p>
            <button>Speak with a online consultant</button>
        </div>
    </div>
  )
}
