
import React from 'react'
import './fourth-body.css'
import BlogCard from './blog-card/blog-card';
import { blogs } from './blogs-model';
export default function FourthBody() {
  return (
    <div className='fourth-body'>
        <p className='fourth-body-title'>Blogs</p>
        <div className='scroll-row-container'>
            {
                blogs.map((index)=>{
                    return (
                        <BlogCard
                            image={index.image}
                            title={index.title}
                            content={index.content}
                        />
                    )
                })
            }
        </div>
        <button className='right-arrow'>&gt;</button>
        <div className='lower-button'>
            <button>View all</button>
        </div>
    </div>
  )
}
