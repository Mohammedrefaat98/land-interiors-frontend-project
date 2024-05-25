
import React from 'react'
import './second-body.css'
import {ReactComponent as Calendar} from '../../assets/icons/calendar.svg'
import {ReactComponent as House} from '../../assets/icons/house.svg'
import {ReactComponent as Certificate} from '../../assets/icons/certificate.svg'

export default function SecondBody() {
  return (
    <div className='second-body'>
        <p>Why LAND Interiors</p>
        <div className='row-container'>
            <div className='card'>
                <div className='icon-container'>
                    <Calendar width='100%' height='100%'/>
                </div>
                <div className='text-container'>
                    <p>50 days or we pay you rent</p>
                </div>
            </div>
            <div className='card'>
                <div className='icon-container'>
                    <House width='100%' height='100%'/>
                </div>
                <div className='text-container'>
                    <p>1500+happy customers</p>
                </div>
            </div>
            <div className='card'>
                <div className='icon-container'>
                    <Certificate width='100%' height='100%'/>
                </div>
                <div className='text-container'>
                    <p>300+ design experties</p>
                </div>
            </div>
        </div>
    </div>
  )
}
