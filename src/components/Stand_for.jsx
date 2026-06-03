import {React,useState,useEffect} from 'react'
import '../css/stand_for.css'
import details from './Stand_for_details'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Stand_for() {
   useEffect(() => {
     AOS.init({
       duration: 1000, // Set the duration of the animation
       once: true, // Only animate once
     })
   }, [])
  const [ work_img, setwork_img ] = useState(
    details.filter((details) => details.id === 1)[0].work_img
  )
  const [work_desc, setwork_desc ] = useState(
    details.filter((details) => details.id === 1)[0].work_description
  )
  const active =document.getElementsByClassName('active');

  // console.log(active[1])
  const handleClick=(e)=>{
    // console.log(e);
    active[0].classList.remove('active')
    e.target.classList.add('active')
    const newImage = details.filter((details) => details.work_name === e.target.innerText)[0].work_img;
    const newDesc = details.filter(
      (details) => details.work_name === e.target.innerText
    )[0].work_description;
    setwork_img(newImage);
    setwork_desc(newDesc);
  }
  return (
    <div>
      <h1 className="heading" data-aos="fade">
        What We Stand For
      </h1>
      <hr className="hr-1" />
      <div className="container" data-aos="zoom-in">
        <div className="works">
          <ul>
            {details.map((detail) => {
              return detail.id !== '1' ? (
                <li onClick={handleClick} value={detail.id} key={detail.id}>
                  <p className="work">{detail.work_name}</p>
                </li>
              ) : (
                <li className="active" onClick={handleClick} value={detail.id}>
                  <p className="work">{detail.work_name}</p>
                </li>
              )
            })}
          </ul>
          <div className="work_content">
            <div className="work_img">
              <img src={work_img} alt="" />
            </div>
            <div className="work_desc">
              <p>{work_desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stand_for
