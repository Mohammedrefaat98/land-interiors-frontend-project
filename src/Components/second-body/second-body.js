
import React from 'react'
import './second-body.css'
import { iconCards } from './cards-model'

export default function SecondBody() {
  return (
    <div className='second-body'>
        <p>Why LAND Interiors</p>
        <div className='row-container'>
            {iconCards.map((element,index)=>{
                return(
                    <IconCard key={index}  {...element}  />
                )
            })}
        </div>
    </div>
  )
}

    function IconCard({image,title,alt}) {
      return (<div className='card'>
                <div className='icon-container'>
                    <img src={image} alt={alt} width='100%' height='100%' />
                </div>
                <div className='text-container'>
                    <p>{title}</p>
                </div>
            </div>);
    }
    