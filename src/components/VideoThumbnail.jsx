import {React,useEffect} from 'react'
import '../css/videoThumbnail.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
function VideoThumbnail() {
    useEffect(() => {
      AOS.init({
        duration: 1000, // Set the duration of the animation
        once: true, // Only animate once
      })
    }, [])
  return (
    <>
      <h1 className="small_heading" data-aos="fade">
        Videos
      </h1>
      <hr className="hr-1" />
      <div className="video_thumbnail_container">
        <div className="video-gallery">
          <div className="gallery-item " data-aos="zoom-in">
            <img src="/photos/gallery/video_img1.jpeg" alt="Mount Rainier" />
            <div className="gallery-item-caption">
              <h2>IEEE EDS TALK</h2>
              <p>
                The EDS chapter of IEEE-SJCE brings you a distinguished lecture
                on, "Building an ecosystem for deep-tech entrepreneurship in our
                academic institutions" by Dr. V Ramgopal Rao, Professor and
                Immediate Past Director, IIT Delhi.
              </p>
              <a
                className="vimeo-popup"
                href="https://www.youtube.com/watch?v=qwPHHn1LT2Q"
                aria-label="Watch IEEE EDS TALK video"
              ></a>
            </div>
          </div>

          <div className="gallery-item" data-aos="zoom-in">
            <img
              src="/photos/gallery/video_img2.jpeg"
              alt="Olympic National Park"
            />
            <div className="gallery-item-caption">
              <h2>
                Talk on Research
                <br /> in EECS
              </h2>
              <p>
                The talk was presented by Dr. Prathosh A. P. , Assistant
                Professor, IISc Bangalore on 9th October, 2021.
              </p>
              <a
                className="vimeo-popup"
                href="https://www.youtube.com/watch?v=vSXHOA38Yho"
                aria-label="Watch Talk on Research in EECS video"
              ></a>
            </div>
          </div>

          <div className="gallery-item" data-aos="zoom-in">
            <img
              src="/photos/gallery/video_img3.jpeg"
              className="north-cascades-img"
              alt="North Cascades National Park"
            />
            <div className="gallery-item-caption">
              <h2>Alumuni Podcast</h2>
              <p>
                Alumni Podcast is a knowledge sharing interaction which features
                alumni of SJCE and attempts to know more about their college
                life, professional career, goals of the future and their
                perspective on navigating their life as a human being
              </p>
              <a
                className="vimeo-popup"
                href="https://www.youtube.com/watch?v=IlxzdaT5Nno"
                aria-label="Watch Alumni Podcast video"
              ></a>
            </div>
          </div>

          <div className="gallery-item" data-aos="zoom-in">
            <img src="/photos/gallery/video_img4.jpeg" alt="Mount St Helens" />
            <div className="gallery-item-caption">
              <h2>Kalpana Chawla Memorial Lecture</h2>
              <p>
                The talk was presented by Mrs. Roopa M.V.,Deputy Project
                Director for Chandrayaan 3 Mission,ISRO on 9th December 2023.
                She enlightend the students with her profound insights on
                "Challenges Faced in Chandrayaan 3 Mission".
              </p>
              <a
                className="vimeo-popup"
                href="https://bit.ly/Kalpana_Chawla_Memorial_Lecture_2023"
                aria-label="Watch Kalpana Chawla Memorial Lecture video"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VideoThumbnail