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
      font-family: "Coolvetica";
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
  height: 80vh;
  max-width: 1440px;
  margin:0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 5rem;
  background-color: #FFf;

  .about_grid {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 10px;
    height: 500px;
    
    .text-container{
      padding: 1em;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .heading{
        font-family: "Coolvetica Regular";
        font-size: 3.5rem;
      }
      
      p{
        font-size: 1.1rem;
        line-height: 2;
      }
      
    }
    
  }

  .image {
    img{
      height: 100%;
      width: 100%;
    
      object-fit: cover;
    }
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
          <section className='about_grid'>
            <div className='text-container'>
              <h2 className='heading'>About us</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nam. Ullam fugit quasi fugiat suscipit adipisci amet molestiae, labore accusantium quidem tempora neque impedit, dignissimos ad tempore reiciendis nobis accusamus!</p>
              <button className='bton'>Contact</button>
            </div>
            <div className='image'>
              <img src="https://img.freepik.com/free-photo/handsome-unshaven-european-man-has-serious-self-confident-expression-wears-glasses_273609-17344.jpg" />
            </div>
          </section>
        </Maincontent>
      </Homepagemain>
    </>
  )
}

export default Homepage