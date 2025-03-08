import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'


const Homepagemain = styled.main`
  background-color: #e0e0e0e0;
`

const Hero = styled.section`
  min-height: 100dvh;
  display:flex;
  justify-content: center;
  align-items: center;
  /* background-image:url('../src/assets/bg/bg1.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */

  .homepage_content{
    h1{
      text-align: center;
      margin: 0px;
      font-family: "Coolvetica Regular";
      font-size: 3.3rem;
      font-weight : 500;
      letter-spacing: 1px;      

      span{
        font-family: var(--font-3);
        font-size: 3rem;
        letter-spacing: 1px;
      }
    }

    div{
      display: flex;
      justify-content: center; 
      gap: 10px;
      margin-top: 40px;
    }
  }
`

const Maincontent = styled.section`
  height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
  background-color: #FFf;

  .heading{
    text-align: center;
    margin: 2rem 0rem;
    font-size: 3rem;
  }

  
`

function Homepage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Homepagemain>
        <Hero className='background-element'>
          <div className="homepage_content">
            <h1>
              Velammal Institute of Technology <br /><span>ACM STUDENT CHAPTER</span>
            </h1>
            <div>
              <button className='bton'>Join ACM</button>
              <button className='bton'>Contact</button>
            </div>
          </div>
        </Hero>

        <Maincontent>
          <section>

          </section>
        </Maincontent>
      </Homepagemain>
    </>
  )
}

export default Homepage