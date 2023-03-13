import React from 'react'
import { useContext } from 'react'
import { store } from './Details'
import Reusable from '../Utility/Reusable'
import './Movies.css'
const Bollywood = () => {

  const [data] = useContext(store)
  console.log(data);
  return (
    <div >
      <h1>Movies</h1>
      <div className='line'></div>
      <div className='parent'>
        <div className='div1'>

          {
            data &&  data.filter((i) => { return (i.category === 'Bollywood') }).map((n) => (

              <Reusable
                key={n.id}
                imgUrl={n.img}
                title={n.title.slice(0, 15)}
                description={n.description.slice(0, 200)}
              />
            ))
          }

        </div>

        <div className='div2'>
          <h1>Top Post</h1>
          <div className='line'></div>
          {
            data &&  data.filter((i) => { return (i.category === 'Bollywood') }).map((n) => (

              <Reusable
                key={n.id}
                imgUrl={n.img}
                title={n.title.slice(0, 15)}
                description={n.description.slice(0, 15)}

              />


            ))
          }
          <div className='adver'> Advertisement </div>
        </div>

      </div>
    </div>

  )
}

export default Bollywood