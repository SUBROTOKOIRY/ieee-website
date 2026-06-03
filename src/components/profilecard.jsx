import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../css/profilecard.css'

function ProfileCard(props) {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div key={props.id}>
      <div className="profile_card_container">
        <div className="col-md-4 col-sm-6">
          <div className="our-team">
            <div className="team-image">
              <img src={props.photo.src} alt={props.photo.name} />
              <ul className="social">
                <li>
                  <a 
                    href={props.photo.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="linkedin"
                    aria-label="LinkedIn profile"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.84v8.37h2.84v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.84M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a 
                    href={`mailto:${props.photo.gmail}`}
                    className="email"
                    aria-label="Send email"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </a>
                </li>
              </ul> 
            </div>
            <div className="team-content">
              <h3 className="title">{props.photo.name}</h3>
              <p className="description">{props.photo.post}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard;