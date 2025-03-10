import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Featues from "../components/Featues";


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
      font-size: 5.2rem;
      font-weight: 700;
      letter-spacing: 1px;
      color: #363636;

      span {
        font-family: var(--font-3);
        font-size: 4rem;
        font-weight: normal;
        text-shadow: 1px 1px;
      }

      @media (max-width: 1025px) {
        font-size: 4rem;
        span {
          font-size: 3rem;
        }
      }

      @media (max-width: 769px) {
        font-size: 3rem;
        span {
          font-size: 2rem;
        }
      }

      @media (max-width: 436px) {
        font-size: 2.7rem;
        span {
          font-size: 1.5rem;
        }
      }
    }

    .quote {
      text-align: center;
      padding: 1.5rem;
      font-family: "Roboto";
      font-size: 1.5rem;
      font-weight: 500;

      @media (max-width: 769px) {
        font-size: 1.1rem;
      }

      @media (max-width: 426px) {
        font-size: 1rem;
      }
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

  @media (max-width : 769px) {
    padding: 3rem;
  }

  .about_grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    /* max-height: 500px; */

    @media (max-width: 426px) {
      grid-template-columns: repeat(1, 1fr);
    }

    .text-container {
      padding: 1em;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .heading {
        font-family: "Monda";
        font-size: 4.5rem;
        font-weight: 800;
      }

      p {
        font-size: 1.7rem;
        line-height: 2;
      }

      @media (max-width: 1025px) {
        .heading {
          font-size: 3.5rem;
        }
        p{
          font-size: 1.2rem;
        }
      }

      @media (max-width: 769px) {
        .heading {
          font-size: 2.5rem;
        }
        p{
          font-size: 1rem;
          line-height: 1.7;
        }
      }

      @media (max-width: 426px) {
        .heading {
          font-size: 2.5rem;
        }
        p{
          font-size: 1rem;
          line-height: 1.7;
        }
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
  const { setnavState, Sectionref, handlecontact } = props;

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
        <Hero className="background-element" ref={Sectionref}>
          <div className="homepage_content">
            <h1>
              Velammal ITech <br />
              <span>ACM STUDENT CHAPTER</span>
            </h1>
            <p className="quote">Compete | Aspire | Evolve</p>
            <div>
              <button className="bton" href="https://www.acm.org/membership">Join ACM</button>
              <button className="bton" onClick={handlecontact}>Contact</button>
            </div>
          </div>
        </Hero>

        <Maincontent>
          <section className="about_grid">
            <div className="text-container">
              <h2 className="heading">About us</h2>
              <p>
                Velammal Institute of Technology is committed to be a leader in innovative work force development and a world class learning venue for the ever changing needs of Business and Industry.
                In line with our mission, we accelerate technology transfer to industry and develop innovations in applications of emerging technologies through high quality technical education and work force training
              </p>
              <button className="bton" onClick={handlecontact}>Contact Now</button>
            </div>
            <div className="image">
              {/* <img src="https://img.freepik.com/free-photo/handsome-unshaven-european-man-has-serious-self-confident-expression-wears-glasses_273609-17344.jpg" /> */}
              {/* <img src={college}/> */}
              <img src="https://velammalgroup.com/wp-content/uploads/2023/06/Velammal-Institute-of-Technology01.jpg" />
            </div>
          </section>

          <Featues />
        </Maincontent>
      </Homepagemain>
    </>
  );
}

export default Homepage;
