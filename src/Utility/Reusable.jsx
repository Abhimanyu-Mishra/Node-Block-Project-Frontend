import React from 'react'
import { Link } from 'react-router-dom'
import './Reusable.css'
const Reusable = (props) => {
  const {imgUrl,title,description} = props
  return (
    <Link className='link' to= '/card' state={{imgUrl:imgUrl,title:title,description:description}}>
    <div className='card-main' >
      <div className='card1'>

       <img  style={{width:'100%'}} src={imgUrl} alt=''/>
       <hr/>
      </div>
        <div className='descrp'>
         <div className='title'>{title}</div>
         <p className='p'> {description}</p>
         
         <hr/>
        </div>
        
    </div>
    </Link>
    
  )
}

export default Reusable
