import React from 'react'
import { Link } from 'react-router-dom'
import './ReusableSec.css'

const ReusableSec = (props) => {
  const {imgUrl,title,description} = props

  return (

    <Link to='/card' state={{imgUrl:imgUrl,title:title,description:description}}>
    <div className='width30'>
    <div ><img className='insidediv' src={imgUrl} alt=''/></div>
    
    <div className='title'>{title}</div>
    
    </div>
    </Link>
      
     
    
  )
}

export default ReusableSec
