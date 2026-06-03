import React from 'react'
import '../css/footer.css'
function Footer() {
return (
  <div>
    <div className="about_us">
      <div className="IEEE-SJCE">
        <h1>IEEE-SJCE</h1>
      </div>
      <div className="contact_us">
        <h1>ADDRESS</h1>
        <p>
          IEEE-SJCE student branch
          <br />
          Sri Jayachamarajendra College of Engineering
          <br />
          Mysuru, 570006
          <br />
          Phone: +(91) 7795317819
          <br />
          Email: ieeesjce2019@gmail.com
        </p>
      </div>
      <div className="importent_links">
        <h1>IMPORTANT LINKS</h1>
        <a href="https://jssstuniv.in/">JSS STU</a>
        <a href="https://www.ieee.org/">IEEE.org</a>
        <a href="https://wie.ieee.org/">IEEE WIE</a>
        <a href="https://standards.ieee.org/">IEEE Standrads</a>
        <a href="https://ieeexplore.ieee.org/Xplore/home.jsp">
          IEEE XploreDigital Library
        </a>
        <a href="https://eds.ieee.org/">IEEE EDS</a>
        <a href="https://signalprocessingsociety.org/">IEEE SPS</a>
        <a href="https://ieeebangalore.org/">IEEE-Bangalore section</a>
        <a href="http://www.ieee-ras.org/">IEEE RAS</a>
      </div>
      <div className="follow_us">
        <h1>FOLLOW US</h1>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
          crossorigin="anonymous"
        />

        <ul>
          <li>
            <a href="https://www.instagram.com/ieee_sjce/">
              <i className="fab fa-instagram icon"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/ieeesjce/">
              <i className="fab fa-facebook-f icon"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/ieee-sjce/mycompany/">
              <i className="fab fa-linkedin-in icon"></i>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/user/IEEESJCE">
              <i className="fab fa-youtube icon"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer">
      <p>
        Copyrights © 2024 IEEE-SJCE | Developed by the WBD Board at IEEE-SJCE
      </p>
      {/* <!-- <hr> --> */}
    </div>
  </div>
)
}

export default Footer
