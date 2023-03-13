import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Open.css'


const OpenCard = () => {
    const location=useLocation()
    const {imgUrl,title,description} = location.state

  return (
    <div className='main1'>
    <div className='head' style={{fontSize:'1.6em'}}>{title}</div>
    <div className='image1'><img  style={{width:'100%'}} src={imgUrl} alt='' /></div>
    <p className='para1'>{description}</p>
    <Link to='/'>
    <button>Back to HomePage</button>
    </Link>

    </div>
  )
}

export default OpenCard