
import React from 'react'
import './fourth-body.css'
import modernInterior from '../../assets/images/fourth-body-image1.png';
import exteriorProject from '../../assets/images/fourth-body-image2.png';
import greyBeauty from '../../assets/images/fourth-body-image3.png';
import plantationInterior from '../../assets/images/fourth-body-image4.png';
import roleOfFurnitures from '../../assets/images/fourth-body-image4.png';

export default function FourthBody() {
  return (
    <div className='fourth-body'>
        <p className='fourth-body-title'>Blogs</p>
        <div className='scroll-row-container'>
            <div className='blog-card'>
                <div className='blog-image-container'>
                    <img src={modernInterior} alt='kitchen'/>
                </div>
                <div className='blog-text-container'>
                    <p>Modern Interior</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,</p>
                </div>
            </div>
            <div className='blog-card'>
                <div className='blog-image-container'>
                    <img src={exteriorProject} alt='kitchen'/>
                </div>
                <div className='blog-text-container'>
                    <p>Exterior Project</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,</p>
                </div>
            </div>
            <div className='blog-card'>
                <div className='blog-image-container'>
                    <img src={greyBeauty} alt='kitchen'/>
                </div>
                <div className='blog-text-container'>
                    <p>Grey Beauty</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,</p>
                </div>
            </div>
            <div className='blog-card'>
                <div className='blog-image-container'>
                    <img src={plantationInterior} alt='kitchen'/>
                </div>
                <div className='blog-text-container'>
                    <p>Plantation interior</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,</p>
                </div>
            </div>
            <div className='blog-card'>
                <div className='blog-image-container'>
                    <img src={roleOfFurnitures} alt='kitchen'/>
                </div>
                <div className='blog-text-container'>
                    <p>Role of furnitures</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,</p>
                </div>
            </div>
        </div>
        <div className='lower-button'>
            <button>View all</button>
        </div>
    </div>
  )
}
