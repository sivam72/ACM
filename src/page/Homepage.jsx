import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'


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
      font-family: var(--font-1);
      font-size: 3.3rem;
      font-weight : 700;
      letter-spacing: -1px;

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
      margin: 20px 0px;
    }
  }
`

function Homepage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero className='background-element'>
          <div className="homepage_content">
            <h1>
              Velammal Institute of Technology <br /><span>ACM Student Chapter</span>
            </h1>
            <div>
              <button className='bton'>Join ACM</button>
              <button className='bton'>Contact</button>
            </div>
          </div>
        </Hero>
      </main>
    </>
  )
}

export default Homepage