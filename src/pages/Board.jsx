import {React,useEffect} from 'react'
import '../css/board.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const boardsData = [
  {
    id: 'web-dev',
    title: 'Web Development Board',
    animation: 'https://lottie.host/?file=dc229b20-4a86-4c49-b454-7a5023d86ab8/o7qpAuynA7.json',
    about: 'Web Development Board is an exclusive committee dedicated to designing and maintaining the IEEE-SJCE website and web pages. We create a collaborative space where students from various disciplines work together to develop secure, creative, and impactful web solutions while learning industry-standard web technologies.',
    initiatives: [
      {
        name: 'Web Hosting & Deployment',
        description: 'Web development board is responsible for deploying , maintaining and updating IEEE-SJCE website on secure cloud platforms.'
      }
    ]
  },
  {
    id: 'editorial',
    title: 'Editorial Board',
    animation: 'https://lottie.host/?file=9d286e82-2e6b-4c8c-b925-b1b8ee052744/dBXmGwKKCY.json',
    about: 'The Editorial Board strives to present compelling articles about the latest trends and discoveries in technology, while amplifying the voice of IEEE-SJCE members and students. We produce engaging publications that inspire innovation and foster knowledge sharing.',
    initiatives: [
      {
        name: 'IEEE Interface Magazine',
        description: 'Annual magazine featuring three special editions: Orientation, Tuxedo, and Cyberia.'
      },
      {
        name: 'Technical Article Curation',
        description: 'Curate and publish in-depth articles on emerging technologies and research.'
      },
      {
        name: 'Student Spotlights',
        description: 'Feature member achievements and innovative projects from IEEE-SJCE community.'
      },
      {
        name: 'Content Strategy',
        description: 'Develop compelling narratives for IEEE events and organizational initiatives.'
      }
    ]
  }
];

function Board() {
   useEffect(() => {
     AOS.init({
       duration: 1000,
       once: true,
     })
   }, [])

  const renderBoardSection = (board) => (
    <div key={board.id} className="board-section" data-aos="fade-up">
      <div className="board-header">
        <div className="board-header-content">
          <h2>{board.title}</h2>
          <p>{board.about}</p>
        </div>
        <iframe
          title={`${board.title} animation`}
          className="board-animation"
          src={board.animation}
          style={{ border: 'none' }}
        ></iframe>
      </div>
      
      {board.initiatives && board.initiatives.length > 0 && (
        <div className="initiatives-container">
          <h3 style={{ color: '#a994ee', fontSize: '1.8rem', marginBottom: '1.5rem' }}>Key Initiatives & Programs</h3>
          <div className="initiatives-grid">
            {board.initiatives.map((initiative, idx) => (
              <div key={idx} className="initiative-card" data-aos="zoom-in">
                <h3>{initiative.name}</h3>
                <p>{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div>
      <Navbar />

      <h1 className="heading" data-aos="fade">BOARDS</h1>
      <hr className="hr-1" />
      <div className="boards-container">
        {boardsData.map(board => renderBoardSection(board))}
      </div>

      <div className="magazine-section" data-aos="fade-up">
        <h2 style={{ color: '#a994ee', fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>IEEE Interface Magazine</h2>
        <div className="magazine-content">
          <div className="magazine-text">
            <p>
              We are thrilled to present IEEE Interface - our signature annual magazine showcasing innovation, research, and the vibrant community of IEEE-SJCE. Each edition brings fresh perspectives on the latest technological trends and achievements.
            </p>
            <a
              href="https://drive.google.com/file/d/1LCHJoy6sXg5IC3mZTSvX1WoSFKEJURc9/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="magazine-btn"
            >
              View Magazine
            </a>
          </div>
          <div className="magazine-cover">
            <img src="/photos/events/magazine.png" alt="IEEE Interface Magazine" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Board
