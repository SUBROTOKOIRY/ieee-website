import React, { useEffect } from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'
import { photos } from '../components/photos.js'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Caraousel from '../components/Caraousel'
import '../css/photos.css'
import VideoThumbnail from '../components/VideoThumbnail'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Album() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of the animation
      once: true, // Only animate once
    })
  }, [])

  return (
    <div>
      <Navbar />
      <h1 className="heading" data-aos="fade">
        Memories
      </h1>
      <hr className="hr-1" />
      <Caraousel />
      <div className="album">
        <PhotoProvider>
          {photos.map((photo, index) => (
            <div key={index} className="photo-wrapper">
              <PhotoView src={photo.src}>
                <img
                  src={photo.src}
                  alt="Gallery"
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    cursor: 'pointer',
                    borderRadius: '8px',
                  }}
                />
              </PhotoView>
            </div>
          ))}
        </PhotoProvider>
      </div>
      <VideoThumbnail />
      <Footer />
    </div>
  )
}

export default Album
