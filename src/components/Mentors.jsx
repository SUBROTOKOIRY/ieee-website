import {React,useEffect} from 'react'
import '../css/mentor.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Mentors() {
   useEffect(() => {
     AOS.init({
       duration: 1000, // Set the duration of the animation
       once: true, // Only animate once
     })
   }, [])
    const mentors_data = [
      {
        id: 1,
        type: 'BRANCH COUNSELLOR',
        src: '/photos/members/MG Veena.jpg',
        name: 'Dr. M G VEENA',
        linkedin: 'https://www.linkedin.com/in/veena-m-g-3b2ab039/',
        gmail: 'veenamaheshn@gmail.com',
      },
      {
        id: 2,
        type: 'RAS ADVISOR',
        src: '/photos/members/Sudarshan PK.jpeg',
        name: 'Dr. SUDARSHAN P K',
        linkedin:
          'https://www.linkedin.com/in/sudarshan-patilkulkarni-86178447/',
        gmail: 'sudarshan_pk@sjce.ac.in',
      },
      {
        id: 3,
        type: 'EDS ADVISOR',
        src: '/photos/members/SB Rudraswamy.jpg',
        name: 'Dr. S B RUDRASWAMY',
        linkedin: '',
        gmail: 'rudra.swamy@gmail.com',
      },
      {
        id: 4,
        type: 'WIE ADVISOR',
        src: '/photos/members/Supreetha M.jpg',
        name: 'Ms. SUPREETHA M',
        linkedin: 'https://www.linkedin.com/in/supreetha-manjanna-65308415/',
        gmail: 'supreetha.manjann@sjce.ac.in',
      },
      {
        id: 5,
        type: 'SPS ADVISOR',
        src: '/photos/members/Dr. SHASHIDHAR R.jpg',
        name: 'Dr. SHASHIDHAR R',
        linkedin: 'https://www.linkedin.com/in/shashidhar-r-ph-d-ab6152123/',
        gmail: 'shashidhar.r@sjce.ac.in',
      },
       {
        id: 6,
        type: 'SBMDC ADVISOR',
        src: '/photos/members/anitha_prasad.jpg',
        name: 'Dr. ANITHA PRASAD',
        linkedin: '',
        gmail: 'anith.sp@sjce.ac.in',
      },
    ]
  return (
    <div>
      <h1 className="heading" data-aos="fade">
        Our Mentors
      </h1>
      <hr className="hr-1" />
      <div className="mentors_container">
        <div className="row">
          {mentors_data.map((data) => {
            return (
              <div
                className="mentors_wrapper"
                key={data.id}
                data-aos="zoom-in"
              >
                <div className="mentors">
                  <div className="pic">
                    <img src={data.src} alt={data.name || "mentor"} />
                    <ul className="social">
                      <li>
                        <a
                          href={`mailto:${data.gmail}`}
                          className="fa fa-envelope"
                          aria-label="Send email"
                        ></a>
                      </li>
                      {/* <li>
                        <a href="#" className="fab fa-twitter"></a>
                      </li>
                      <li>
                        <a href="#" className="fab fa-google-plus"></a>
                      </li> */}
                      <li>
                        <a href={data.linkedin} className="fab fa-linkedin" aria-label="LinkedIn profile"></a>
                      </li>
                    </ul>
                  </div>
                  <div className="mentors-content">
                    <div className="mentors-info">
                      <h3 className="title">{data.name}</h3>
                      <span className="post">{data.type}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Mentors
