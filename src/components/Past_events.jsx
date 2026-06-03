import {React,useEffect} from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'; 
import 'react-vertical-timeline-component/style.min.css';
import '../css/pastevent.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Past_events() {
  const pastEvents = [
    {
      id: 1,
      date: '29th - 30th Nov and 1st Dec 2024',
      title: 'IOT-3.0  Workshop',
      img: 'photos/events/iot_workshop.jpeg',
      content: `A 3-day workshop with a lot of learning and interesting hands-on
              sessions.We will be covering protocols and all the other important
              theories, before moving onto the more exciting part of simulating
              them using Raspberry Pi and Node MC.`,
    },
    {
      id: 2,
      date: '10th - 12th January 2025',
      title: 'Soldering and Etching Workshop',
      img: '/photos/events/soldering&etching.jpeg',
      content: `The Electron Devices Society conducted SOLDERING & ETCHING WORKSHOP, one of the flagship events of IEEE-SJCE. A 3-day event that gives students a hands-on experience of Soldering and Etching with theoretical and practical sessions.`,
    },
    {
      id: 3,
      date: '11th February 2025',
      title: 'AI Expert Talk and Ideathon',
      img: '/photos/events/Screenshot 2025-03-26 212852.png',
      content: `STRONG - Scientific Research for NextGen GirlGeeks was organized by the MCAA India Chapter, funded by the European Union, and supported by the MCAA-Mednight Project, IEEE Mysore Subsection, and IEEE-SJCE. The event aimed to inspire young women to pursue careers in science and research.`,
    },
    {
      id: 4,
      date: '25th October 2025',
      title: 'Circuitrix',
      img: '/photos/events/circuitrix_2025.jpg',
      content: `Our team conducted the event Circuitrix,This hands on session is designed to help the students to explore ,create and simulate both analog and the digital circuits using the powerful circuit simulation tools.`
    },
    {
      id: 5,
      date: '6th - 7th November 2025',
      title: 'Snap Circuits',
      img: '/photos/events/snap_circuit_2025.jpg',
      content: `The Electron Devices Society conducted the Snap Circuits,it provided a hands-on experience of electronic components and increased curiosity of electronic circuits and their working among freshers. It was an opportunity to gain knowledge and develop circuit building skills. `,
    },
    {
      id: 6,
      date: '21st - 23rd November 2025',
      title: 'IOT 4.0',
      img: '/photos/events/iot_4.0.jpg',
      content: `The Robotics and Automation Society conducted the IoT 4.0 workshop, providing participants with hands-on exposure to building smart, connected systems and enhancing their understanding of IoT concepts and real-world applications using embedded platforms.`,
    }, 
    {
      id: 7,
      date: '6th December 2025',
      title: 'Wave Lab',
      img: '/photos/events/wavelab.jpg',
      content: `This is the debut event of the SPS Wing. Students utilized the powerful tool, MATLAB, to understand the basics of Signal Processing. The workshop allows the students to explore the world of digital signal processing utilising an industrial standard tool, MATLAB. The students obtain a MATLAB license which will be useful for their future explorations.`,
    },   
    {
      id: 8,
      date: '19th - 21st December 2025',
      title: 'Soldering and Etching Workshop',
      img: '/photos/events/soldering.jpeg',
      content: `The Electron Devices Society conducted SOLDERING & ETCHING WORKSHOP, one of the flagship events of IEEE-SJCE. A 3-day event that gives students a hands-on experience of Soldering and Etching with theoretical and practical sessions.`,
    },   
  ]
   useEffect(() => {
     AOS.init({
       duration: 1000, // Set the duration of the animation
       once: true, // Only animate once
     })
   }, [])
  return (
    <>
      <div className="past_events_bigscreen">
        <h1 className="heading" data-aos="fade">
          Past Events
        </h1>
        <hr className="hr-1" />
        <VerticalTimeline lineColor={'rgb(147, 169, 187)'}>
          {pastEvents.reverse().map((event) => {
            return (
              <>
                {event.id % 2 === 0 ? (
                  <VerticalTimelineElement
                    key={event.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: 'rgb(50, 107, 160)',
                      color: '#fff',
                      right: '5%',
                      borderRadius: '20px',
                    }}
                    contentArrowStyle={{
                      borderRight: '7px solid rgb(180, 227, 255)',
                    }}
                    date={event.date}
                    icon={<img className="event_img" src={event.img} alt="" />}
                  >
                    <h3
                      style={{ fontSize: '1.7rem' }}
                      className="vertical-timeline-element-title"
                    >
                      {event.title}
                    </h3>
                    <p style={{ fontSize: '1rem',textAlign:'justify' }}>{event.content}</p>
                  </VerticalTimelineElement>
                ) : (
                  <VerticalTimelineElement
                  key={event.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: 'rgb(50, 107, 160)',
                      color: '#fff',
                      left: '5%',
                      borderRadius: '20px',
                    }}
                    contentArrowStyle={{
                      borderRight: '7px solid rgb(180, 227, 255)',
                    }}
                    date={event.date}
                    icon={<img className="event_img" src={event.img} alt="" />}
                  >
                    <h3
                      style={{ fontSize: '1.7rem' }}
                      className="vertical-timeline-element-title"
                    >
                      {event.title}
                    </h3>
                    <p style={{ fontSize: '1rem',textAlign:'justify'}}>{event.content}</p>
                  </VerticalTimelineElement>
                )}
              </>
            )
          })}

          <VerticalTimelineElement
            icon={
              <img className="event_img" src="photos/events/tl5.png" alt="" />
            }
            // icon={<StarIcon />}
          />
        </VerticalTimeline>
      </div>

      {/* for small screen */}

      <div className="past_events_smallscreen">
        <h1 className="heading">Past Events</h1>
        <hr className="hr-1" />
        <VerticalTimeline lineColor={'rgb(147, 169, 187)'} lineHeight={1.5}>
          {pastEvents.map((event) => {
            return (
              <>
                {event.id % 2 === 1 ? (
                  <VerticalTimelineElement
                    key={event.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: ' rgb(50, 107, 160)',
                      color: '#fff',
                      borderRadius: '20px',
                    }}
                    contentArrowStyle={{
                      borderRight: '7px solid  rgb(180, 227, 255)',
                    }}
                    date={event.date}
                    // iconStyle={{ background: '#78b0d8;;', color: '#fff' }}
                    icon={<img className="event_img" src={event.img} alt="" />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {event.title}
                    </h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                    <p>{event.content}</p>
                  </VerticalTimelineElement>
                ) : (
                  <VerticalTimelineElement
                  key={event.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: ' rgb(50, 107, 160)',
                      color: '#fff',
                      borderRadius: '20px',
                    }}
                    contentArrowStyle={{
                      borderRight: '7px solid  rgb(180, 227, 255)',
                    }}
                    date={event.date}
                    // iconStyle={{ background: '#78b0d8;;', color: '#fff' }}
                    icon={
                      <img
                        className="event_img"
                        src={event.img}
                        alt=""
                      />
                    }
                  >
                    <h3 className="vertical-timeline-element-title">
                      {event.title}
                    </h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                    <p>
                      {event.content}
                    </p>
                  </VerticalTimelineElement>
                )}
              </>
            )
          })}

  
          <VerticalTimelineElement
            icon={
              <img className="event_img" src="photos/gallery/tl5.png" alt="" />
            }
            // icon={<StarIcon />}
          />
        </VerticalTimeline>
      </div>
    </>
  )
}

export default Past_events
