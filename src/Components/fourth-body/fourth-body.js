
import React from 'react'
import './fourth-body.css'
import BlogCard from './blog-card/blog-card';
import { blogs } from './blogs-model';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function FourthBody() {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive:[
            {
                breakpoint: 767,
                settings: {
                    initialSlide: 0,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
            
        ]
    };
  return (
    <div className='fourth-body'>
        <p className='fourth-body-title'>Blogs</p>
        <Slider {...settings} className='scroll-row-container'>
            {
                blogs.map((index)=>{
                    return (
                        <BlogCard
                            {...index}
                        />
                    )
                })
            }
        </Slider>
        <div className='lower-button'>
            <button>View all</button>
        </div>
    </div>
  )
}
