import React from 'react'
import '../css/Banner.css'
import { HashLink } from 'react-router-hash-link'
// import {Link} from 'react-router-dom'
function Banner() {
  return (
    <div>
      <div className="banner-div overlay">
      <img
  className="banner"
  src= "/photos/gallery/caraousel/IMG_5944.jpg"
  alt="IEEE SJCE team"
/>
        <h3 className="welcome_title">
          <span>Welcome To</span>
        </h3>
        <div className="club_name">
          <h1 className="animate_character">IEEE SJCE</h1>
        </div>
        <div className="explore_btn_div">
          <HashLink smooth to="#explore_id">
            <button className="explore_btn" id="explore_id">
              Explore
            </button>
          </HashLink>
        </div>
      </div>
    </div>
  )
}

export default Banner