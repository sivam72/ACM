import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { teams_data } from '../data'

const Teamscontainer = styled.section`
  margin-top:${props => props.height + "px"};
  min-height: 100dvh;

  .hero {
    display: flex;
    justify-content: center;
    min-height: 400px;
    padding: 2rem;

    h1 {
      padding-top: 2rem;
      font-family: var(--font-3);
      font-weight: 800;
      text-align: center;
      letter-spacing: 5px;
    }
  }
   .wrapper {
      position: relative;
      top: -200px;
      padding: 1rem;
      display: grid;
      place-items: center;
    }

  .teams_grid {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 20px;
    padding: 2rem;

    @media (max-width: 426px) {
        grid-template-columns: repeat(1,1fr);
    }
    
    .teams_card {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2,1fr);
      place-items: center;
      background-color: #fff;
      box-shadow: 1px 1px 10px #e0e0e0e0;
      border-radius: 10px;
      padding: 1rem;
      max-width: 300px;
      min-height: 350px;
      
      text-align: center;
      gap:10px;

      .teams_img {
        img {
          -webkit-user-drag: none;
          user-select: none;
          -moz-user-select: none;
          -webkit-user-select: none;
          -ms-user-select: none;
          height: 120px;
          aspect-ratio:1;
          object-fit: cover;
          border-radius: 50%;
        }
      }
      .teams_text{
        h2,p {
          margin: 0px;
          padding: 0px;
        }
        h2 {
          font-weight: 700;
        }
        p{
          font-size: 1.2rem;
        }
        .teams_links {
          display: flex;
          justify-content: center;
          gap: 10px;

          .icon {
            flex-shrink: 0;
            color: #000;
            
          }
        }
      }

    }
  }
`

function Teams(props) {
  const { navHeight } = props;
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(navHeight.current.offsetHeight)
    // console.log(height);
  }, [])
  return (
    <Teamscontainer height={height.toString()} >
      <div className='hero background-element'>
        <h1 className='individual_heading'>Meet Our Team</h1>
      </div>

      <section className='wrapper'>
        <div className='teams_grid'>
          {teams_data.map((data, index) => {
            return (
              <div className='teams_card' key={index}>

                <div className='teams_img'>
                  <img src={data.photo} draggable="false" onContextMenu={(e) => {e.preventDefault()}}/>
                </div>

                <div className="teams_text">

                  <h2>{data.name}</h2>
                  <p>{data.role}</p>

                  <div className="teams_links">
                    <a href={data.links.linkedin} target='_blank'>
                      <i className="fa-brands fa-linkedin icon"></i>
                    </a>
                    <a href={data.links.git} target='_blank'>
                      <i className="fa-brands fa-github icon"></i>
                    </a>
                  </div>

                </div>
              </div>
            )
          })}
        </div>
      </section>

    </Teamscontainer>
  )
}

export default Teams