import React from 'react'
import './App.css'
import Header from './Utility/Header'
import Routeblog from './Utility/Routeblog'
import Details from './Componant/Details'
import './Utility/Header.css'
import Footer from './Utility/Footer'

const App = () => {

  return (
    <div>
    <Details>
    <Header/>
      <Routeblog/>
    </Details>
    <Footer/>
    </div>
  )
}

export default App








