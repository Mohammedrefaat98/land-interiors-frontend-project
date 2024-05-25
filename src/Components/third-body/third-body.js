
import React from 'react'
import './third-body.css'
import kitchen from '../../assets/images/third-body-image4.png';
import bedroom from '../../assets/images/third-body-image2.png';
import livingRoom from '../../assets/images/third-body-image3.png';
import homeOffice from '../../assets/images/third-body-image4.png';


export default function ThirdBody() {
  return (
    <div className='third-body'>
        <p>What we do?</p>
        <div className='row-container'>
            <div className='card'>
                <div className='card-image-container'>
                    <img src={kitchen} alt='kitchen'/>
                </div>
                <div className='text-container'>
                    <p>50 days or we pay you rent</p>
                </div>
            </div>
        </div>
    </div>
  )
}
