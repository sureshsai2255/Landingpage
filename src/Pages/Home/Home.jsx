import './home.css'
import React from 'react'

export default function Home() {
  return (

    <div className="container" id='home'>
      <div className="content">
        <p><strong>Hi I'm </strong> <span className='name'>SAI KRISHNA </span>and currently pursuing graduation in the field of <span className='branch'>COMPUTER SCIENCE AND ENGINEERING</span></p>
      </div>
      <div className="image-wrapper">
      <img src="/assets/image.jpg" alt="" className='img'/>
      </div>
    </div>
  )
}
