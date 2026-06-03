import {React,useEffect} from 'react'
import Navbar  from '../components/Navbar'
import '../css/societies.css'
import Footer from '../components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

const societiesData = [
  {
    id: 'student-branch',
    title: 'IEEE SJCE Student Branch',
    description: 'A premier student organization dedicated to advancing technology and professional development.',
    animation: 'https://lottie.host/?file=89a9d017-c9c2-4e7c-a02e-c33653a6972a/3dpYgASICZ.json',
    about: ' IEEE-SJCE Student Branch which started as an elite group 29 years ago, today has sprawled throughout the campus of SJCE, making the students technically more competitive, more professional and capable of enhancing their abilities as an engineer. Since then IEEE-SJCE Student Branch, a division under Region 10 of IEEE has been known for the immensity with which its members were bestowed. The very success story of its students as professionals into their respective fields after graduations speaks of its standards.IEEE-SJCE Student Branch, which started 29 years ago, has grown to represent 330+ members across six engineering disciplines. With a focus on technical excellence and professional growth, we conduct two major technical fests annually and organize workshops to keep students industry-ready.',
    events: []
  },
  {
    id: 'eds',
    title: 'Electron Devices Society',
    description: 'IEEE-SJCE EDS has been providing students with basic electronics knowledge since its inception. It has helped students get better acquainted with electronic components, the various techniques ofcircuit making, and the basics of robot building.',
    animation: '',
    about: 'IEEE-SJCE EDS has been providing students with basic electronics knowledge since its inception. It has helped students get better acquainted with electronic components, the various techniques ofcircuit making, and the basics of robot building.',
    events: [
      {
        name: 'SNAP CIRCUITS',
        description: 'Hands-on workshop introducing basic electrical and electronic circuits to first and second year students.'
      },
      {
        name: 'SOLDERING & ETCHING WORKSHOP',
        description: 'Learn proper soldering techniques and practical circuit fabrication in this intensive 3-day workshop.'
      },
      {
        name: 'VACATION PROJECT MANIA',
        description: 'Interactive sessions where 120+ students share knowledge and practical experience during vacations.'
      },
      {
        name: 'ROBOTICS WORKSHOP',
        description: 'Build autonomous robots with collision avoidance and mobile control systems.'
      }
    ]
  },
  {
    id: 'wie',
    title: 'Women in Engineering',
    description: 'Promoting women in science, technology, and engineering globally.',
    animation: 'https://lottie.host/?file=2f28a704-d29d-4531-975b-c3e7e6d9bf20/WVBLEk0GNv.json',
    about: 'IEEE Women in Engineering (WIE)</b> is a global network of IEEE members and volunteers dedicated to promoting women engineers and scientists and inspiring girls around the world to follow their academic interests in a career in engineering and science. It is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity. Its goal is to facilitate the recruitment and retention of women in technical disciplines globally. IEEE WIE envisions a vibrant community of IEEE women and men collectively using their diverse talents to innovate the benefit of humanity..',
    events: [
      {
        name: 'PRAYAS',
        description: 'Platform for Rendering Aid to Young kids - Reach-in program providing educational support to underprivileged children.'
      },
      {
        name: 'TECH-KNOW-LOGIC',
        description: '2-day technical workshop teaching microcontrollers and programming to differently-abled students.'
      },
      {
        name: 'KALPANA CHAWLA MEMORIAL LECTURE',
        description: 'Distinguished lecture by renowned women scientists in aerospace and technological fields.'
      },
      {
        name: 'CODEFIESTA',
        description: '3-hour online coding competition with prizes for top performers and special awards for women.'
      }
    ]
  },
  {
    id: 'ras',
    title: 'Robotics & Automation Society',
    description: 'Advancing robotics, automation, and intelligent systems.',
    animation: 'https://lottie.host/?file=2761ce9c-5f1d-49bd-9db8-b7b3bd572353/UrP5jahB6E.json',
    about: 'IEEE-SJCE RAS aims to keep the students up to date on the latest automation technology. Robotics focuses on systems incorporating sensors and actuators that operate autonomously or semi-autonomously in cooperation with humans. Robotics research emphasises intelligence and adaptability to cope with unstructured environments. Automation research emphasises efficiency, quality, and reliability, focusing on systems that operate autonomously.The IEEE Robotics and Automation Society\'s objectives are scientific, literary, and educational in character. The Society strives for the advancement of the theory and practice of robotics and automation engineering, along with allied arts and sciences, and for the maintenance of high professional standards among its members.',
    events: [
      {
        name: 'PYTHON BOOTCAMP',
        description: 'Comprehensive 3-day workshop covering Python fundamentals, data structures, functions, and mini-projects.'
      },
      {
        name: 'IMAGE PROCESSING WITH OPENCV',
        description: 'Learn computer vision techniques using the industry-standard OpenCV library.'
      },
      {
        name: 'IOT & EMBEDDED SYSTEMS',
        description: 'Hands-on training with microcontrollers, sensors, and IoT protocols.'
      },
      {
        name: 'ROBOTICS CHALLENGES',
        description: 'Compete in exciting robotics competitions featuring autonomous systems and real-world applications.'
      }
    ]
  },
  {
    id: 'sps',
    title: 'Signal Processing Society',
    description: 'Advancing signal processing and related technologies.',
    animation: '',
    about: 'IEEE-SJCE SPS is dedicated to providing students an insight into the world of signals and analysis. It allows students to understand the true essence of how the world is interpreted by both humans and machines alike. It shows them signal processing techniques and how to apply them to real-world models.',
    events: [
      {
        name: 'WAVE LAB',
        description: 'This is the debut event of the SPS Wing. Students utilized the powerful tool, MATLAB, to understand the basics of Signal Processing. The workshop allows the students to explore the world of digital signal processing utilising an industrial standard tool, MATLAB. The students obtain a MATLAB license which will be useful for their future explorations..'
      },
    ]
  }
];

function Socities() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, []);

  const renderSocietySection = (society) => (
    <div key={society.id} className="society-section" data-aos="fade-up">
      <div className="society-header">
        <div className="society-header-content">
          <h2>{society.title}</h2>
          <p>{society.about}</p>
        </div>
        {society.animation && (
          <iframe
            title={`${society.title} animation`}
            className="society-animation"
            src={society.animation}
            style={{ border: 'none' }}
          ></iframe>
        )}
      </div>
      
      {society.events.length > 0 && (
        <div className="events-container">
          <h3 style={{ color: '#a994ee', fontSize: '1.8rem', marginBottom: '1.5rem' }}>Featured Events & Workshops</h3>
          <div className="events-grid">
            {society.events.map((event, idx) => (
              <div key={idx} className="event-card" data-aos="zoom-in">
                <h3>{event.name}</h3>
                <p>{event.description}</p>
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
      <h1 className="heading" data-aos="fade">
        Societies & Boards
      </h1>
      <hr className="hr-1" />
      <div className="societies-container">
        {societiesData.map(society => renderSocietySection(society))}
      </div>
      <Footer />
    </div>
  )
}

export default Socities

//         <iframe
//           title="student branch animation"
//           className="img1"
//           src="https://lottie.host/?file=89a9d017-c9c2-4e7c-a02e-c33653a6972a/3dpYgASICZ.json"
//         ></iframe>
//         <section data-aos="zoom-in">
//           IEEE-SJCE Student Branch which started as an elite group 29 years ago,
//           today has sprawled throughout the campus of SJCE, making the students
//           technically more competitive, more professional and capable of
//           enhancing their abilities as an engineer. Since then IEEE-SJCE STUDENT
//           BRANCH, a division under Region 10 of IEEE has been known for the
//           immensity with which its members were bestowed. The very success story
//           of its students as professionals into their respective fields after
//           graduations speaks of its standards.
//         </section>
//         <br />
//         <br />
//         <section data-aos="zoom-in">
//           IEEE-SJCE now has about 330+ members from six fields of engineering:
//           Biotechnology, Computer Science, Electronics & Communication,
//           Electrical & Electronics, Information Science, and Instrumentation
//           Technology. Apart from these many students from various
//           post-graduation departments have also subscribed to be members.
//         </section>
//         <br />
//         <br />
//         <section data-aos="zoom-in">
//           IEEE-SJCE conducts two annual technical fests - TUXEDO, a Linux fest
//           during the odd semesters, and CYBERIA, the annual technical fest
//           conducted during the even semesters. CYBERIA was instigated 19 years
//           ago and has been organized for 18 years now. The events in the fest
//           are so organized as to give students from all branches of engineering,
//           irrespective of them being members or not, and irrespective of their
//           branches, a chance to showcase their talents and abilities.
//         </section>
//         <img src="/photos/events/student_branch.jpeg" alt="" className="img2" />
//         <section data-aos="zoom-in">
//           To make students technically competitive, technical tests on C
//           programming, microprocessors etc. are conducted. Various workshops and
//           crash courses are also organized. An annual leadership workshop adorns
//           the calendar of events every year, which helps the students to improve
//           as leaders and inculcates the spirits of true leadership in them.
//           Apart from this, extensive talks are organized by people representing
//           industry, academia, and research as well.
//         </section>
//         <br />
//         <br />
//         <section data-aos="zoom-in">
//           The standards of IEEE-SJCE was proven to be the best when it was
//           awarded the Best Student Branch for the year 2003-2004. Among the
//           competitors for this tag were the top colleges of VTU, Manipal
//           Institute of Technology, and NITK; Surathkal as well.
//         </section>
//         <br />
//         <br />
//         <section data-aos="zoom-in">
//           IEEE-SJCE is also proud of nurturing the IEEE-EDS STUDENT CHAPTER.
//           IEEE-SJCE is the only student branch to have gained permission to
//           start this chapter throughout India. IEEE-SJCE also has a Women in
//           Engineering Student Chapter.
//         </section>
//       </p>

//       <h3 className="small_heading" id="socities_eds_id">
//         ELECTRON DEVICES SOCIETY
//       </h3>

//       <h4 className="societies_subheading">ABOUT US</h4>
//       <p className="societies_p">
//         <img src="/photos/events/EDS.jpg" alt="" className="img3" />
//         <section data-aos="zoom-in">
//           IEEE-SJCE EDS has been providing students with basic electronics
//           knowledge since its inception. It has helped students get better
//           acquainted with electronic components, the various techniques of
//           circuit making, and the basics of robot building.
//         </section>
//       </p>

//       <h4 className="societies_subheading">SNAP CIRCUIT</h4>
//       <p className="societies_p">
//         <section data-aos="zoom-in">
//           A Snap circuit product is a tool for entering the exciting world of
//           electronics. Electronics play an increasingly important role in our
//           everyday lives, and so it is important to have some basic knowledge of
//           them. In this workshop, the students have a hands-on experience of
//           basic electrical and electronics circuits. The workshop is conducted
//           exclusively for first and second year students. The students are
//           allowed to explore different circuits with the help of the manuals
//           which come along with the kits under the supervision of volunteers.
//         </section>
//       </p>

//       <h4 className="societies_subheading">SOLDERING AND ETCHING WORKSHOP</h4>
//       <p className="societies_p">
//         <section data-aos="zoom-in">
//           Soldering is a concept used in every electronic appliance. It is
//           necessary to know the proper soldering techniques. Keeping this in
//           mind, IEEE-SJCE EDS conducts soldering and etching workshops in odd
//           semesters, where senior IEEE EDS members teach the 2nd and 1st years.
//           They make participants etch a simple circuit and solder it. The main
//           highlights of the workshop were that the participants got to learn
//           robotics from scratch and then move on to more advanced topics like
//           Bluetooth-controlled robots, voice-controlled robots, DTMF-controlled
//           robots, and even Android app-controlled robots.
//         </section>
//       </p>

//       <h4 className="societies_subheading">VACATION PROJECT MANIA</h4>
//       <p className="societies_p">
//         <img
//           src="/photos/events/vacation_project.jpg"
//           alt=""
//           className="img4"
//         />
//         <section data-aos="zoom-in">
//           The famous adage of Jean Nicolas, "whatever we posses becomes of
//           double value when we have the opportunity of sharing it with others"
//           embodies the idea of conducting VPM. Vacation Project Mania, an
//           initiative of IEEE-SJCE EDS is conducted during the vacations. VPM is
//           an interactive session in which the seniors and juniors mingle
//           together to share their knowledge, ideas, and most importantly,
//           experiences, but the torch bearers of this successful mania are the
//           seniors without a doubt. VPM gets a huge response from all circuit
//           branches, around 120+ students attend the project sessions every day
//           for 4 hours. VPM plays a prominent role in generating practical
//           impulses in the minds of young budding engineers.
//         </section>
//       </p>

//       <h4 className="societies_subheading">ROBOTICS WORKSHOP</h4>
//       <p className="societies_p">
//         <section data-aos="zoom-in">
//           As they say, our knowledge is volatile until we apply the concept of
//           our knowledge in a real-time situation. Hence, "Robotics", one of the
//           biggest events in SJCE, is conducted annually by the IEEE-SJCE EDS
//           Chapter. The workshop starts with building basic robots and ends with
//           the participants being able to build robots that use collision
//           avoidance and are controlled using mobile phones through DTMF.
//         </section>
//       </p>

//       <h3 className="small_heading" id="societies_wie_id">
//         WOMEN IN ENGINEERING
//       </h3>

//       <p className="societies_p">
//         <iframe
//           title="women in engineering animation"
//           className="img5"
//           src="https://lottie.host/?file=2f28a704-d29d-4531-975b-c3e7e6d9bf20/WVBLEk0GNv.json"
//         ></iframe>
//         <section data-aos="zoom-in">
//           <b>IEEE Women in Engineering (WIE)</b> is a global network of IEEE
//           members and volunteers dedicated to promoting women engineers and
//           scientists and inspiring girls around the world to follow their
//           academic interests in a career in engineering and science. It is the
//           world’s largest technical professional organization dedicated to
//           advancing technology for the benefit of humanity. Its goal is to
//           facilitate the recruitment and retention of women in technical
//           disciplines globally. IEEE WIE envisions a vibrant community of IEEE
//           women and men collectively using their diverse talents to innovate for
//           the benefit of humanity.
//         </section>
//         <br />
//         <br />
//         <section data-aos="zoom-in">
//           The idea of a WIE chapter in the IEEE-SJCE student branch was
//           conceived and implemented only a couple of years ago. Since its
//           inception, the chapter has been responsible for several activities and
//           initiatives. WIE team has made frequent visits to several
//           organizations to reach in to underprivileged children and educate
//           them about their chances in engineering.
//         </section>
//         <br />
//         <br />
//         <section data-aos="zoom-in">
//           IEEE-SJCE WIE also organises distinguished lectures by women
//           professionals who help in encouraging young girls to strive hard and
//           motivate them in achieving excellence in academics and profession.
//           Apart from this, the WIE chapter of the student branch is also
//           involved in organising technical competitions and workshops. The team
//           intends to continue these activities along with the implementation of
//           newer ideas.
//         </section>
//         <br />
//         <br />
//       </p>

//       <h4 className="societies_subheading">MAJOR ACTIVITIES OF WIE :</h4>
//       <br />
//       <br />
//       <h5 className="societies_small_subheading">▪ PRAYAS</h5>
//       <p className="societies_p">
//         <img src="/photos/events/prayas.jpeg" alt="" className="img6" />
//         <section data-aos="zoom-in">
//           (Platform for Rendering Aid to Young kids and Aiming to spread Smiles)
//           A reach-in programme to provide underprivileged children a positive
//           learning environment that will help them to unleash their potential.
//           This includes numerous visits to orphanages for providing academic aid
//           to the kids. Additionally, kids are also helped with spoken English.
//           Several organizations like Baapuji Children's Home, Sri Chayadevi
//           Trust, Divya Deepa Charitable Trust, Vijaya Educational Society, etc.
//           have been part of PRAYAS and have been given a chance to carry in the
//           reach in programme. Currently, the team of WIE is carrying in PRAYAS
//           in Rangarao Memorial School for Disabled, Mysuru.
//         </section>
//         <br />
//         <br />
//       </p>

//       <h5 className="societies_small_subheading">▪ Tech-Know-Logic</h5>

//       <p className="societies_p">
//         <section data-aos="zoom-in">
//           A technical workshop focusing on teaching concepts of microcontroller
//           and programming to differently-abled students in order to provide them
//           with practical experience of the subjects. It is a 2-day workshop held
//           at JSS Polytechnic for the Differently Abled (PDA), Mysuru. IEEE-SJCE
//           WIE has been practicing this workshop for 3 years and aims to continue
//           doing so with more participants and newer concepts.
//         </section>
//         <br />
//         <br />
//       </p>

//       <h5 className="societies_small_subheading">
//         ▪ Kalpana Chawla Memorial Lecture
//       </h5>

//       <p className="societies_p">
//         <section data-aos="zoom-in">
//           A distinguished lecture by a Woman scientist from the aerospace
//           engineering domain. The main motto of the event was to mark the demise
//           of the Indian-born Women astronaut, Kalpana Chawla. The initiative to
//           organize this event was taken in the year 2018. The chief guest for
//           the event was Mrs. N Valarmathi , Deputy Director , ISRO. A glimpse of
//           missions undertaken by ISRO and challenges in completing those
//           missions was given. WIE team aims to continue organizing this event
//           annually.
//         </section>
//         <br />
//         <br />
//       </p>

//       <h5 className="societies_small_subheading">▪ Codefiesta</h5>

//       <p className="societies_p">
//         <section data-aos="zoom-in">
//           WIE wing of IEEE brought us CODEFIESTA, an online coding competition
//           sponsored by Sahaj Software. This 3-hour hackathon was open to all
//           students and exciting cash prizes and certificates were provided to
//           the winners. To encourage the participation of girls, a special cash
//           prize of 1K was awarded to each of the top 3 participants, excluding
//           the girls among the top five winners.
//         </section>
//       </p>

//       <h3 className="small_heading" id="societies_rds_id">
//         ROBOTICS AND AUTOMATION SOCIETY
//       </h3>

//       <p className="societies_p">
//         <iframe
//           title="robotics and automation animation"
//           className="img7"
//           src="https://lottie.host/?file=2761ce9c-5f1d-49bd-9db8-b7b3bd572353/UrP5jahB6E.json"
//         ></iframe>
//         <section data-aos="zoom-in">
          // IEEE-SJCE RAS aims to keep the students up to date on the latest
          // automation technology. Robotics focuses on systems incorporating
          // sensors and actuators that operate autonomously or semi-autonomously
          // in cooperation with humans. Robotics research emphasises intelligence
          // and adaptability to cope with unstructured environments. Automation
          // research emphasises efficiency, quality, and reliability, focusing on
          // systems that operate autonomously.The IEEE Robotics and Automation
          // Society's objectives are scientific, literary, and educational in
          // character. The Society strives for the advancement of the theory and
          // practice of robotics and automation engineering, along with allied
          // arts and sciences, and for the maintenance of high professional
          // standards among its members.
//         </section>
//       </p>

//       <h4 className="societies_subheading">PYTHON BOOTCAMP</h4>
//       <p className="societies_p">
//         <section data-aos="zoom-in">
//           During the course of the workshop, participants were introduced to the
//           fundamentals of Python, starting from the very basics of the language.
//           The workshop covered the topics like introduction, printing
//           statements, operators and variable types on day1. Topics such as
//           strings, conditional statements, lists, tuples and dictionaries were
//           covered on day2, and on day3 participants learnt about loops, break
//           and continue statements, functions, modules and libraries along with
//           programming examples and the development of Mini Projects.
//         </section>
//       </p>

//       <h4 className="societies_subheading">IMAGE PROCESSING USING OPEN CV</h4>

//       <p className="societies_p">
//         <section data-aos="zoom-in">
//           Image processing is a method of performing operations on image in
//           order to enhance the image or get useful information from it. Image
//           processing is a fascinating topic with wide applications. IEEE SJCE
//           RAS along with the EDS team conducted a 5 day event on image
//           processing wherein the basics of Python were covered on the initial
//           days followed by image processing concepts.
//         </section>
//       </p>

//       <h4 className="societies_subheading">GNU Octave Workshop</h4>

//       <p className="societies_p">
//         <section data-aos="zoom-in">
//           GNU Octave is a software featuring a high level programming language
//           that is primarily intended for numerical calculations. IEEE SJCE RAS
//           has conducted an event on this software called "Introduction to
//           Octave" in virtual mode. Octave is an open source software similar to
//           Matlab. Participants were introduced to the concepts of mathematical
//           computation in GNU Octave. This was a 3 day event in which an
//           interesting application in image processing was covered on the last
//           day. IEEE-SJCE, in addition to the above-mentioned societies, also
//           houses an eccentric Membership Development Committee and a SBMDC wing.
//         </section>
//       </p>
//       <h3 className="small_heading" id="societies_rds_id">
//         SIGNAL PROCESSING SOCIETY
//       </h3>
//       <p className="societies_p">
//         <iframe
//           title="robotics and automation animation"
//           className="img7"
//           src="https://lottie.host/?file=2761ce9c-5f1d-49bd-9db8-b7b3bd572353/UrP5jahB6E.json"
//         ></iframe>
//         <section data-aos="zoom-in">
//           IEEE-SJCE SPS is dedicated to providing students an insight into the world 
//           of signals and analysis. It allows students to understand the true essence
//            of how the world is interpreted by both humans and machines alike. It shows
//             them signal processing techniques and how to apply them to real-world models.
//         </section>
//       </p>
//       <h3 className="small_heading">
//         Student Branch Membership Development Committee:
//       </h3>

//       <p className="societies_p">
//         <section data-aos="zoom-in">
//           The Student Branch Membership Development Committee team helps in
//           increasing IEEE Membership by recruiting new members and retaining
//           current members. It also promotes elevations in grade and encourages
//           participation in various society memberships. It contributes to the
//           awareness by members of the values of their IEEE membership and
//           increases IEEE membership quality. In addition, it provides efficient
//           and timely communication to all IEEE management levels of the
//           interests and concerns of our members and identifies membership
//           trends, changes and problems.
//         </section>
//         <br />
//       </p>

//       <Footer />
//     </div>
//   )
// }

// export default Socities
