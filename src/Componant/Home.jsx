import React from 'react'
import { useContext } from 'react'
import { store } from './Details'
import './Home.css'
import './Movies.css'
import ReusableSec from '../Utility/ReusableSec'
const Home = () => {
  const [data] = useContext(store);
  console.log(data)
  return (
    <div>
      <div className='maindiv'>
        <div className='sub1'><img src='https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/03/technology-trend-freepik-1647963838.jpg' alt='hbf' /></div>
        <div className='sub2'>
          <div className='mini1'><img src='https://w0.peakpx.com/wallpaper/519/85/HD-wallpaper-lonely-island-ocean-nature-island-waves-trees-clouds-art-work-thumbnail.jpg' /></div>
          <div className='mini2'><img src='https://w0.peakpx.com/wallpaper/740/686/HD-wallpaper-nature-3d-water-digital-beautiful-thumbnail.jpg' /></div>
        </div>
      </div>
      <div className='flex'>

        {
          data && data.filter((i) => { return (i.category === 'food') }).map((n) => (

            <ReusableSec
              key={n.id}
              articleid={n.id}
              imgUrl={n.img}
              title={n.title.slice(0, 15)}
              description={n.description.slice(0, 100)}
              author={n.author}

            />
          ))
        }
        {
          data &&  data.filter((i) => { return (i.category === 'technology') }).map((n) => (

            <ReusableSec
              key={n.id}
              articleid={n.id}
              imgUrl={n.img}
              title={n.title.slice(0, 15)}
              description={n.description.slice(0, 100)}
              author={n.author}

            />


          ))
        }
        {
          data &&  data.filter((i) => { return (i.category === 'bollywood') }).map((n) => (

            <ReusableSec
              key={n.id}
              imgUrl={n.img}
              title={n.title.slice(0, 15)}
              description={n.description.slice(0, 100)}
            />
          ))
        }
      </div>

      <center> <h1>Latest Technology</h1>
        <div className='line'></div></center>
      <br /><br />
      <div className='flex'>
        {
          data &&  data.filter((i) => { return (i.category === 'Technology') }).slice(0, 3).map((n) => (

            <ReusableSec
              key={n.id}
              imgUrl={n.img}
              title={n.title.slice(0, 15)}
              description={n.description.slice(0, 100)}
            />
          ))
        }

      </div>

      <center> <h1>Latest Food</h1>
        <div className='line'></div></center>
      <br /><br />
      <div className='flex'>
        {
          data &&  data.filter((i) => { return (i.category === 'Food') }).slice(7, 9).map((n) => (

            <ReusableSec
              key={n.id}
              imgUrl={n.img}
              title={n.title.slice(0, 15)}
              description={n.description.slice(0, 100)}
            />
          ))
        }
      </div>

      <center> <h1>Latest Fitness</h1>
        <div className='line'></div></center>
      <br /><br />
      <div className='flex'>
        {
          data &&  data.filter((i) => { return (i.category === 'Fitness') }).slice(0, 3).map((n) => (

            <ReusableSec
              key={n.id}
              imgUrl={n.img}
              title={n.title.slice(0, 15)}
              description={n.description.slice(0, 100)}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Home
