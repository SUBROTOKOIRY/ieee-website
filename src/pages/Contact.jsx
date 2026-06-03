import React from 'react';
import { useState } from 'react';
import '../css/contact.css';
// import { SocialIcon } from 'react-social-icons';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from 'react-bootstrap';
function Contact(){
    const email = "kumarsubrato1103@gmail.com";
    const [body,setBody]=useState("");
    const [name,setName]=useState("");
    const [pn,setPn]=useState("");

    const update=(e)=>{
        e.preventDefault();
        window.open(`mailto:${email}?subject=Website Query  &body=Name:${name + "\n"} Phone No:${pn} Message:${body}`);
    }

    return (
      <div>
        <Navbar />
        <h1 className="heading">CONTACT US</h1>
        <hr className="hr-1" />
        <div className="contact_us_div">
          <div className="con-main">
            <form className="con-main-form">
              <h1 className="con-form-h1">NAME</h1>
              <input
                placeholder="Your Name"
                className="con-form-inp"
                name="name"
                onChange={(e) => {
                  setName(e.target.value)
                }}
              ></input>
              <h1 className="con-form-h1">PHONE NO</h1>
              <input
                placeholder="Your phone number"
                className="con-form-inp"
                name="pn"
                onChange={(e) => {
                  setPn(e.target.value)
                }}
              ></input>
              <h1 className="con-form-h1">MESSAGE</h1>
              <textarea
                placeholder="Type your message here.."
                className="con-form-inm"
                name="message"
                onChange={(e) => {
                  setBody(e.target.value)
                }}
              ></textarea>
              <br />
              <Button className="con-form-btn" onClick={update} type="submit">
                submit
              </Button>
            </form>
          </div>

          <div className="map_div">
            <iframe
              title="Google Maps"
              width="500"
              height="300"
              style={{ border: '0', borderRadius: '15px' }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15592.149409781525!2d76.6134265!3d12.3132715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1ad797cbfc78d07a!2sJSS%20Science%20and%20Technology%20University%2C%20Mysuru.!5e0!3m2!1sen!2sin!4v1567658298958!5m2!1sen!2sin"
            ></iframe>
          </div>
        </div>
        
        {/* <div className="con-main-info">
            <h1 className="con-info-h1">CONTACT US</h1>
            <p className="con-info-p">We would like to here from you</p>
            <SocialIcon className="con-info-icon" url="https://www.facebook.com/stellarsacjc/" />
            <SocialIcon className="con-info-icon" url="https://www.instagram.com/stellar.sjce/" />
            <SocialIcon className="con-info-icon" url="https://www.linkedin.com/groups/14268004/" />
        </div> */}
        <div className="service">
          {/* <a href="mailto:ieeesjce2019@gmail.com"></a> */}
          <div class="box">
            <iframe
              title="email animation"
              style={{ border: 'none', height: '100px' }}
              src="https://lottie.host/?file=23ecd9fa-1719-42c7-bcef-b021c5e3c509/eHhdi9dHx9.json"
            ></iframe>

            <p class="service_para">Write us on</p>
            <a className="service_link" href="mailto:ieeesjce2019@gmail.com">
              ieeesjce2019@gmail.com
            </a>
          </div>

          {/* <a href="tel:+918762361434"> */}
          <div class="box">
            <iframe
              title="phone animation"
              style={{ border: 'none', height: '100px' }}
              src="https://lottie.host/?file=94896b6f-5561-481d-8924-ed335c23637b/eAdCe077z7.json"
            ></iframe>

            <p class="service_para">Reach us on</p>
            <a className="service_link" href="tel:+918762361434">
              (+91) 7795317819
            </a>
          </div>

          <div class="box">
            <iframe
              title="instagram animation"
              style={{ border: 'none', height: '100px' }}
              src="https://lottie.host/?file=1341d09a-b282-4dc2-8685-e26dc2784943/Nu0yAutyXc.json"
            ></iframe>

            <p class="service_para">Follow us on insta</p>
            <a
              className="service_link"
              href="https://www.instagram.com/ieee_sjce/"
            >
              @ieee_sjce
            </a>
          </div>

          <div class="box" style={{width:'300px'}}>
            <img
              src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"
              alt="LinkedIn logo"
              style={{ height: '100px', width: 'auto' }}
            />

            <p class="service_para">Connect with us on LinkedIn</p>
            <a
              className="service_link"
              href="https://www.linkedin.com/company/ieee-sjce/"
            >
              IEEE-SJCE
            </a>
          </div>

          {/* <div class="box">
            <a href="www.instagram.com/ieee_sjce/">
              <br />
            </a>
            <p class="center">
              <a href="www.instagram.com/ieee_sjce/">
                Don't forget to follow us on insta{' '}
              </a>
              <a href="ieeesjce">@ieee_sjce</a>
            </p>
          </div> */}
        </div>
        <Footer />
      </div>
    )
}

export default Contact;