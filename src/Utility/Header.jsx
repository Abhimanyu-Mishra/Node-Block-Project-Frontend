import './Header.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Header = () => {
  const [toggle, settoggle] =useState(false)
  
  const navclick = ()=>{
settoggle(!toggle)
  }
  return (
    <div>
      <div className='headparent'>
        <div className='the'>The</div>
        <div className='sieren'>Sieren</div>
      </div>
      <div className='navbar'>
        <span className={toggle ? 'nav' : 'navnot'}> <Link className='nav' to='/'>Home </Link></span>
        <span className={toggle ? 'nav' : 'navnot'}><Link className='nav' to='/movies'>Movies</Link></span>
        <span className={toggle ? 'nav' : 'navnot'}><Link className='nav' to='/fit'>Fitness</Link></span>
        <span className={toggle ? 'nav' : 'navnot'}><Link className='nav' to='/food'>Food</Link></span>
        <span className={toggle ? 'nav' : 'navnot'}><Link className='nav' to='/tech'>Technology</Link></span>
        <span className={toggle ? 'nav' : 'navnot'}><Link className='nav' to='/news'>Hollywood</Link></span>
        <span className='media-btn' onClick={navclick}>|||</span>
      </div>
    </div>
  )
}

export default Header