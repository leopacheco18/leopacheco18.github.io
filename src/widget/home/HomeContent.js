import React from 'react'
import "./HomeContent.css"
import Banner from '../../assets/banner.png'
const HomeContent = () => {
  return (
    <>
    <h3 className="option-content-title">
        Welcome to my WebSite
      </h3>
      
      <h5 className="home-info">Here I'll explain you who is Toby Dev | Leonardo Pacheco</h5>
      <h5 className="home-info">I'll show my works and my knowledges</h5>
      <h5 className="home-info">Also you will be able to contact me through my social media</h5>
      <h5 className="home-info">So I hope you love my WebSite!</h5>
        <img className='banner' src={Banner} alt="My banner" />
    </>
  )
}

export default HomeContent