import { React, useEffect } from "react";
import "../css/event.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Event() {
  useEffect(() => {
    AOS.init({
      duration: 900, // Set the duration of the animation
      once: true, // Only animate once
    });
  }, []);

  return (
    <div>
      {/* <div className="event" id="event_part">
        <h1 className="heading" data-aos="fade">
          Upcoming Events
        </h1>
        <hr className="hr-1" />
      </div> */}

      {/* ------------ Event 1 ------------ */}
      {/* <div className="new_event" id="new_event_1" data-aos="zoom-in">
        <img src="photos/events/soldering.jpeg" alt="soldering" data-aos="zoom-in" />

        <div className="inside_box">
          <h1>Soldering and Etching</h1>
          <p data-aos="zoom-in">
            Behind every reliable electronic product lies a well crafted PCB. The EDS wing of IEEE-SJCE brings you its flagship 3-day hands-on workshop, Soldering and Etching, an immersive experience that transforms beginners into confident hardware builders.
            <br />
            <br />
            This workshop focuses on the art and science of PCB fabrication—from understanding circuit layouts and etching your own boards to mastering clean, reliable soldering techniques. Participants will experience the complete journey of turning a schematic into a working circuit, gaining practical skills that form the foundation of core electronics.
            <br />
            <br />
            If you aspire to move beyond simulations and truly build electronics, this workshop is where real electronics begins.
            <br />
            <br />
            <b>Important Details:</b>
            <br /> 🗓 Event date: 19th, 20th, and 21st December 2025
            <br /> 🏛 Venue: IS Seminar Hall (1st floor), JSS-STU
          </p>
        </div>
      </div> */}

      {/* ------------ Event 2 ------------ */}
    </div>
  );
}

export default Event;
