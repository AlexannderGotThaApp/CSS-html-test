import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Even Bulky Pigeon</title>
        <meta property="og:title" content="Even Bulky Pigeon" />
      </Helmet>
      <span className="home-text">Alexander :D</span>
      <a
        href="https://www.roblox.com/users/4122308136/profile"
        target="_blank"
        rel="noreferrer noopener"
      >
        My roblox profile
      </a>
      <textarea
        placeholder="Type in whatever the sigma you want here"
        className="home-textarea textarea"
      ></textarea>
    </div>
  )
}

export default Home
