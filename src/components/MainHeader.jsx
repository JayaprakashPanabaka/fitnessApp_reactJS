import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../assets/Images/main_header.png'
import '../pages/home/home.css'

const MainHeader = () => {
  return (
    <div>
      <header>
        <div className="container main_header main_header-container">
          <div className="main_header-left">
            <h4>#100DaysOfWorkOut</h4>
            <h1>Join The Legends Of The Fitness World</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Illo, vitae veniam reprehenderit fugit quam consectetur explicabo fuga. 
              Similique, repudiandae earum!
            </p>
            <Link to="/plans" className='btn lg'>Get Started</Link>
          </div>  
          <div className="main_header-right">
            <div className="main_header-circle">
              <div className="main_header-image">
                <img src={Image} alt="Main-Header-Image" />
              </div>
            </div>
          </div>
        </div>  
      </header>
    </div>
  )
}

export default MainHeader
