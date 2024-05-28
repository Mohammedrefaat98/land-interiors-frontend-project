import React from 'react'

export default function BlogCard({image,title,content}) {
  return (
    <div className='blog-card'>
        <div className='blog-image-container'>
            <img src={image} alt='kitchen'/>
        </div>
        <div className='blog-text-container'>
            <p>{title}</p>
            <p>{content}</p>
        </div>
    </div>
  )
}
