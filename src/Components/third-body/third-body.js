
import React from 'react'
import './third-body.css'
import kitchen from '../../assets/images/third-body-image4.png';
import bedroom from '../../assets/images/third-body-image3.png';
import livingRoom from '../../assets/images/third-body-image2.png';
import homeOffice from '../../assets/images/third-body-image1.png';


export default function ThirdBody() {
  return (
    <div className='third-body'>
        <p className='title'>What we do?</p>
        <div className='image-row-container'>
            <div className='image-card'>
                <div className='card-image-container'>
                    <img src={kitchen} alt='kitchen'/>
                </div>
                <div className='image-text-container'>
                    <p>Modular Kitchen</p>
                </div>
            </div>
            <div className='image-card'>
                <div className='card-image-container'>
                    <img src={bedroom} alt='kitchen'/>
                </div>
                <div className='image-text-container'>
                    <p>Bedroom</p>
                </div>
            </div>
            <div className='image-card'>
                <div className='card-image-container'>
                    <img src={livingRoom} alt='kitchen'/>
                </div>
                <div className='image-text-container'>
                    <p>Living room</p>
                </div>
            </div>
            <div className='image-card'>
                <div className='card-image-container'>
                    <img src={homeOffice} alt='kitchen'/>
                </div>
                <div className='image-text-container'>
                    <p>Home office</p>
                </div>
            </div>
        </div>
        <p className='lower-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</p>
        
    </div>
  )
}
