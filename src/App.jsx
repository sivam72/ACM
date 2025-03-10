import { Route, Routes } from "react-router"
import styled from "styled-components"
import { useEffect, useRef, useState } from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


import Homepage from "./page/Homepage"
import Teams from "./page/Teams"
import Gallery from "./page/Gallery"
import Events from "./page/Events"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const Appcontainer = styled.section`
  position: relative;
`

const Contactform = styled.div`
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  display: none;
  grid-template-columns: repeat(2,1fr);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 1px 2px 10px #999999;

  @media (max-width: 769px) {
    padding: 1rem;
  }

  h1 {
    font-family: Monda;
    font-weight: 700;
  }

  .contact_details {
    border-right: 1px solid #999999;
    padding: 1rem;
    .text{
      p {
          margin-bottom: 5px;
      }

      .text_line {
        display: flex;
        align-items: center;
        gap:10px;
        
        .contact_icons {
          color: #646464;
          flex-shrink: 0;
          height: 20px;
        }

        p {
          font-size: 1.2rem;
          width:400px;

          @media (max-width: 769px) {
            font-size: 1rem;
            width: 300px;
          }
        }
      }
    }
    .map {
      iframe {
        margin-top: 1.5rem;
        border-radius: 10px;
        width:400px;
        height:300px;
      }
    }

    @media (max-width: 769px) {
      .map {
        iframe{
          width:300px;
          height:200px;
        }
      }
    }
  }

  .contact_container {
    padding: 1rem;
    min-width: 400px;

    @media (max-width: 769px) {
      min-width: 300px;
    }
    .input_cont {
      margin-top: 1rem;
      display: grid;
      grid-gap:1rem;

      .input {
        border:1px solid #999999;
        border-radius: 5px;
        padding: .5rem;

        &.msg {
          height: 150px;
        }
      }
    }
  }

  .close_icon {
    cursor: pointer;
    position: absolute;
    padding: 1rem;
    font-size: 1.6rem;
    font-weight: 700;
    top: 10px;
    right: 10px;
    
    svg {
      height: 30px;
    }
  }

  /* &::before {
    content:'';
    position: absolute;
    background-color: #646464;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  } */
`

function App() {
  const [contactOpen, setcontactOpen] = useState(false);
  const [navState, setnavState] = useState(true);
  const Sectionref = useRef();
  const contactref = useRef();
  const navHeight = useRef();


  function handlecontact() {
    if (contactOpen) {
      contactref.current.style.display = 'none';
      setcontactOpen(false);
    } else {
      contactref.current.style.display = 'grid';
      setcontactOpen(true);
    }
  }

  return (
    <Appcontainer>
      <Navbar navState={navState} handlecontact={handlecontact} navHeight={navHeight} />

      <Routes>
        <Route index element={<Homepage handlecontact={handlecontact} Sectionref={Sectionref} setnavState={setnavState} />} />
        <Route path="/" element={<Homepage handlecontact={handlecontact} Sectionref={Sectionref} setnavState={setnavState} />} />
        <Route path="events" element={<Events navHeight={navHeight} />} />
        <Route path="gallery" element={<Gallery navHeight={navHeight} />} />
        <Route path="teams" element={<Teams navState={setnavState} navHeight={navHeight} />} />
      </Routes>

      <Footer />
      <Contactform ref={contactref}>
        <div className="contact_details">
          <div className="text">
            <h1>Get in Touch</h1>
            <div className="text_line">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="contact_icons">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              <p>b.senthil2002@gmail.com</p>
            </div>
            <div className="text_line">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="contact_icons">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>

              <p>A Thariq Hammed - Chair: +91 75502 06840</p>
            </div>
            <div className="text_line">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="contact_icons">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>

              <p>S Asvitha - Vice Chair: +91 99941 15185</p>
            </div>
          </div>
          <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d215963.81223205512!2d80.22246197570168!3d13.289286996599943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a527efa08e09967%3A0xc1b057bb21ab2483!2sVelammal%20Institute%20of%20Technology!5e1!3m2!1sen!2sin!4v1741540463678!5m2!1sen!2sin" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <form className="contact_container">
          <h1>Contact us</h1>
          <div className="input_cont">
            <input type="text" className="input" placeholder="Name" />
            <input type="text" className="input" placeholder="Email" />
            <input type="text" className="input" placeholder="Phone" />
            <textarea type="text" className="input msg" placeholder="Message" />
            <input type="submit" value="Submit" className="bton subm" />
          </div>
        </form>
        <span className="close_icon" onClick={handlecontact}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </span>
      </Contactform>
    </Appcontainer>
  )
}

export default App
