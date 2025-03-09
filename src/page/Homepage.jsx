import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Featues from "../components/Featues";
import Footer from "../components/Footer";


const Homepagemain = styled.main`
  position: relative;
  background-color: #e0e0e0e0;
`;

const Hero = styled.section`
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;

  .homepage_content {
    user-select: none;
    p {
      margin: 0px;
    }
    h1 {
      text-align: center;
      margin: 0px;
      font-family: "Agdasima";
      font-size: 3.5rem;
      font-weight: 700;
      letter-spacing: 1px;
      color: #363636;

      span {
        font-family: var(--font-3);
        font-size: 3rem;
        font-weight: normal;
        text-shadow: 1px 1px;
      }
    }

    .quote {
      text-align: center;
      padding: 1.5rem;
      font-family: "Roboto";
      font-size: 1.3rem;
      font-weight: 500;
    }

    div {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-top: 40px;
    }
  }
`;

const Maincontent = styled.section`
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 5rem;
  background-color: #fff;

  .about_grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    height: 500px;

    .text-container {
      padding: 1em;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .heading {
        font-family: "Monda";
        font-size: 3.5rem;
      }

      p {
        font-size: 1.1rem;
        line-height: 2;
      }
    }

    .image {
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
`;

function Homepage(props) {
  const { handlecontact } = props;
  const [navState, setnavState] = useState(true);
  const Sectionref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          setnavState(false)
        } else {
          setnavState(true)
        }
      })
    }, { rootMargin: "-200px 0px 0px 0px" })
    observer.observe(Sectionref.current)
  }, [])
  return (
    <>
      <Homepagemain>
        <Navbar navState={navState} handlecontact={handlecontact}/>
        <Hero className="background-element" ref={Sectionref}>
          <div className="homepage_content">
            <h1>
              Velammal Institute of Technology <br />
              <span>ACM STUDENT CHAPTER</span>
            </h1>
            <p className="quote">Compete | Aspire | Evolve</p>
            <div>
              <button className="bton">Join ACM</button>
              <button className="bton" onClick={handlecontact}>Contact</button>
            </div>
          </div>
        </Hero>

        <Maincontent>
          <section className="about_grid">
            <div className="text-container">
              <h2 className="heading">About us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, nam. Ullam fugit quasi fugiat suscipit adipisci amet
                molestiae, labore accusantium quidem tempora neque impedit,
                dignissimos ad tempore reiciendis nobis accusamus!
              </p>
              <button className="bton" onClick={handlecontact}>Contact Now</button>
            </div>
            <div className="image">
              <img src="https://img.freepik.com/free-photo/handsome-unshaven-european-man-has-serious-self-confident-expression-wears-glasses_273609-17344.jpg" />
            </div>
          </section>

          <Featues />
        </Maincontent>
        <Footer />
      </Homepagemain>
    </>
  );
}

export default Homepage;
