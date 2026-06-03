import React, { Suspense, lazy, useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../css/index.css';
import '../css/Banner.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';
// Import CarouselComponent directly (not lazy-loaded for the banner)
import CarouselComponent from '../components/Caraousel';

// Lazy load components with PascalCase names
const Event = lazy(() => import('../components/Event'));
// const Carousel = lazy(() => import('../components/Caraousel')); // Removed unused import
const PastEvents = lazy(() => import('../components/Past_events'));
const MilestoneEvents = lazy(() => import('../components/Milestone_events'));
const Achievements = lazy(() => import('../components/Achievements'));
const StandFor = lazy(() => import('../components/Stand_for'));
const BangaloreFlagship = lazy(() => import('../components/Bangalore_Flagship'));
const Flagship = lazy(() => import('../components/Flagship'));
const Prayas = lazy(() => import('../components/Prayas'));
const Mentors = lazy(() => import('../components/Mentors'));
const Sponsor = lazy(() => import('../components/Sponsor'));
const Footer = lazy(() => import('../components/Footer'));

function BannerComponent() {
  return (
    <div className="banner-container">
      <div className="banner-overlay">
        <div className="banner-content">
          <h3 className="welcome-title">
            <span>Welcome To</span>
          </h3>
          <div className="club-name">
            <h1 className="animate-character">IEEE SJCE</h1>
          </div>
          <div className="explore-button-container">
            <button className="explore-button">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Homepage() {
  useEffect(() => {
    AOS.init({
      duration: 1300,
      once: true,
      mirror: false,
      easing: 'ease-out-cubic'
    });
    AOS.refresh();
  }, []);

  return (
    <Container>
      <BackgroundEffect />
      <Navbar />
      <div className="banner-wrapper">
        <CarouselComponent />
        <BannerComponent />
      </div>

      <div className="introduction" id="introduction_part">
        <div className="first-heading">
          <h2 data-aos="fade-down">
            Experience the joy of learning with IEEE-SJCE!
          </h2>
        </div>
        <div className="second-heading" data-aos="zoom-in" data-aos-delay="300">
          <h2 className='largeScreen'>IMAGINE ! - INNOVATE ! - INSPIRE !</h2>
          <h2 className='smallScreen'>IMAGINE ! INNOVATE ! INSPIRE !</h2>
        </div>
        <div className="paragraph-container" data-aos="fade-up" data-aos-delay="600">
          <p className="paragraph">
            IEEE-SJCE conducts many events regularly for students to gain
            knowledge and encourages them to take active part in all of them.
          </p>
          <div className="glowing-button-container">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScyUvp_2L7Mw3ENLSANaXTQiZmqJJFhxETfKFOXWl9o8wn3Uw/viewform" target="_blank" rel="noopener noreferrer"><button className="glowing-button">JOIN US</button></a>
          </div>
        </div>
      </div>

      <div className="section-divider">
        <div className="divider-line"></div>
        <div className="divider-icon"></div>
        <div className="divider-line"></div>
      </div>

      <Suspense fallback={<div className="loading-section">Loading...</div>}>
        <Event />
        <PastEvents />
        <MilestoneEvents />
        <Achievements />
        <StandFor />
        <BangaloreFlagship />
        <Flagship />
        <Prayas />
        <Mentors />
        <Sponsor />
        <Footer />
      </Suspense>
    </Container>
  );
}

const BackgroundEffect = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(circle at 15% 30%, rgba(32, 133, 222, 0.05) 0%, transparent 25%),
    radial-gradient(circle at 85% 20%, rgba(100, 65, 255, 0.03) 0%, transparent 35%);
  pointer-events: none;
  z-index: -1;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(10, 15, 30, 0.1) 0%, rgba(10, 15, 30, 0.05) 100%);
    z-index: -1;
  }
`;

const Container = styled.div`
  background-color: #0a0f1e;
  color: #e6e6fa;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
  position: relative;

  .loading-section {
    text-align: center;
    padding: 3rem;
    color: #2085de;
    font-size: 1.5rem;
  }

  .section-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3rem 0;
    padding: 0 2rem;

    .divider-line {
      height: 1px;
      flex-grow: 1;
      background: linear-gradient(90deg, transparent 0%, rgba(32, 133, 222, 0.5) 50%, transparent 100%);
    }

    .divider-icon {
      width: 12px;
      height: 12px;
      background-color: #2085de;
      transform: rotate(45deg);
      margin: 0 15px;
      position: relative;

      &:before, &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border: 1px solid rgba(32, 133, 222, 0.5);
        animation: pulse 2s infinite;
      }

      &:after {
        animation-delay: 1s;
      }
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  .introduction {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 5% 10%;

    .first-heading h2 {
      text-align: center;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.9rem;
      letter-spacing: 0.1rem;
      margin-top: 2%;
      color: rgba(184, 192, 231, 0.9);
      font-weight: 400;
      text-shadow: 0 0 15px rgba(184, 192, 231, 0.3);
    }

    .second-heading h2 {
      text-align: center;
      font-size: 3.2rem;
      font-weight: 800;
      letter-spacing: 0.05rem;
      font-family: 'Orbitron', sans-serif;
      color: #2085de;
      animation: neonGlow 5s ease-in-out infinite alternate;
      margin: 1.5rem 0;
    }

    .paragraph-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 1.5rem;
    }

    .paragraph {
      text-align: center;
      max-width: 700px;
      margin: 0 auto 2rem;
      font-size: 1.2rem;
      line-height: 1.8;
      color: rgba(255, 255, 255, 0.8);
    }

    .glowing-button-container {
      margin-top: 1.5rem;
    }

    .glowing-button {
      background: linear-gradient(45deg, #2085de, #4a75e6);
      color: white;
      border: none;
      padding: 0.8rem 2.5rem;
      font-size: 1.1rem;
      font-weight: 600;
      letter-spacing: 1px;
      border-radius: 30px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
      box-shadow: 0 0 20px rgba(32, 133, 222, 0.5),
                  inset 0 0 10px rgba(255, 255, 255, 0.2);

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 0 30px rgba(32, 133, 222, 0.8),
                    inset 0 0 15px rgba(255, 255, 255, 0.3);
      }

      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: all 0.5s;
      }

      &:hover:before {
        left: 100%;
      }
    }
  }

  @keyframes neonGlow {
    0% {
      color: #2085de;
      text-shadow:
        0 0 10px rgba(32, 133, 222, 0.8),
        0 0 20px rgba(32, 133, 222, 0.5),
        0 0 30px rgba(32, 133, 222, 0.3);
    }
    50% {
      color: #4a9eff;
      text-shadow:
        0 0 15px rgba(74, 158, 255, 0.8),
        0 0 25px rgba(74, 158, 255, 0.5),
        0 0 35px rgba(74, 158, 255, 0.3);
    }
    100% {
      color: #2085de;
      text-shadow:
        0 0 10px rgba(32, 133, 222, 0.8),
        0 0 20px rgba(32, 133, 222, 0.5),
        0 0 30px rgba(32, 133, 222, 0.3);
    }
  }

  .smallScreen {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    .introduction {
      padding: 5% 5%;

      .first-heading h2 {
        font-size: 1.7rem;
      }

      .second-heading h2 {
        font-size: 2.8rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .introduction {
      .first-heading h2 {
        font-size: 1.5rem;
      }

      .second-heading h2 {
        font-size: 2.2rem;
      }

      .paragraph {
        font-size: 1.1rem;
      }
    }

    .smallScreen {
      display: block;
    }

    .largeScreen {
      display: none;
    }
  }

  @media screen and (max-width: 480px) {
    .introduction {
      padding: 10% 5%;

      .first-heading h2 {
        font-size: 1.3rem;
      }

      .second-heading h2 {
        font-size: 1.8rem;
      }

      .paragraph {
        font-size: 1rem;
        line-height: 1.6;
      }

      .glowing-button {
        padding: 0.7rem 2rem;
        font-size: 1rem;
      }
    }
  }

  .banner-wrapper {
    position: relative; /* Needed for absolute positioning of children */
    width: 100%;
    /* Adjust height as needed for your banner */
    height: 600px; /* Example height */
    overflow: hidden; /* To contain the carousel */
  }

  .banner-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Vertically center content */
    align-items: center; /* Horizontally center content */
    text-align: center;
    z-index: 10; /* Ensure banner content is on top of the carousel */
    /* Add any text styling here if needed, or keep it in the .banner-content */
  }

  .banner-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4); /* Adjust overlay opacity */
    z-index: 5; /* Ensure overlay is above the carousel but below content */
  }

  .banner-content {
    color: white; /* Example text color */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* Add styles for welcome_title, club_name, explore_btn_div here or in your index.css */
  }

  .welcome-title {
    /* Styles for welcome title */
    margin-bottom: 10px;
  }

  .club-name {
    /* Styles for club name */
    margin-bottom: 20px;
  }

  .animate-character {
    /* Styles for animated club name */
    font-size: 2.5em; /* Adjust as needed */
  }

  .explore-button-container {
    /* Styles for button container */
  }

  .explore-button {
    /* Styles for explore button */
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
  }

  /* You might need to adjust the carousel styles as well to fit the banner dimensions */
  .carousel-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1; /* Ensure carousel is behind the banner content */
  }

  .carousel-container .carousel .slide img {
    object-fit: cover; /* Ensure images cover the banner area */
    width: 100%;
    height: 100%;
  }

  /* You might need to hide the carousel's default navigation (arrows, indicators) */
  .carousel-container .carousel-indicators,
  .carousel-container .control-arrow {
    display: none;
  }
`;

export default Homepage;