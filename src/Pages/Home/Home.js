import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import Titlecard from '../../components/TitleCards/Titlecard'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    
      <div className="home">
        <Navbar />
        <div className="hero">
          <img src={hero_banner} alt="" className='banner-img' />

        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
         <p>Discovering his ties to a sceret anciet order,
         a young man living in modern Istanbul embarks on a quest to save the city from am imortal enemy</p> 
        <div className="hero-btn">
          <button className="btn"><img src={play_icon} alt="" /><p>Play</p></button>
          <button className="btn dark-btn"><img src={info_icon} alt="" />More Info</button>
        </div>
                <Titlecard/>
        </div>
        </div>
        <div className="more-cards">
          <Titlecard title={"blockbuster movies"} category={"now_playing"}/>
          <Titlecard title={"Only on Netflix"} category={"upcoming"}/>
          <Titlecard title={"Upcoming"} category={"top_rated"} />
          <Titlecard title={"My list"}  category={"upcoming"}/>


      </div>
      <Footer/>
      </div>
    
  )
}
export default Home
