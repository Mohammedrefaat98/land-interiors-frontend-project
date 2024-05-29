
import React from 'react'
import './third-body.css';
import { cards } from './cards-model';

export default function ThirdBody() {
  return (
    <div className='third-body'>
        <p className='title'>What we do?</p>
        <div className='image-row-container'>
            {
                cards.map((element,index)=>{
                    return (
                        <ImageCard key={index} {...element}  />
                    )
                })
            }
        </div>
        <p className='lower-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</p>
        
    </div>
  )
}

    function ImageCard({image,title}) {
      return (<div className='image-card'>
                <div className='card-image-container'>
                    <img src={image} alt={title} />
                </div>
                <div className='image-text-container'>
                    <p>{title}</p>
                </div>
            </div>);
    }
  