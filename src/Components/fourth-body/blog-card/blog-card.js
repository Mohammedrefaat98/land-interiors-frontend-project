import React from 'react'
import './blog-card.css'
export default function BlogCard({image,title,content}) {
  return (
    <div className='blog-card'>
        <div className='blog-image-container'>
            <img src={image} alt={title}/>
        </div>
        <div className='blog-text-container'>
            <p>{title}</p>
            <p>{content}</p>
        </div>
    </div>
  )
}
