import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import photo_1 from '../assets/teams/thariq.jpg'
import photo_2 from '../assets/teams/Asvitha.jpg'
import photo_3 from '../assets/teams/sheik.jpg'
// import photo_4 from '../assets/teams/'

const data = [
  {
    photo: photo_1,
    name: "Mr A Thariq Hameed",
    role: "Chair Person",
    links: {
      git: "https://github.com/Thariiq07",
      linkedin: ""
    }
  },
  {
    photo: photo_2,
    name: "Asvitha Sivabalan",
    role: "Vice Chair",
    links: {
      git: "",
      linkedin: ""
    }
  },
  {
    photo: photo_3,
    name: "Mr Mohamed Sheik Noor",
    role: "Secretary",
    links: {
      git: "",
      linkedin: ""
    }
  },
  {
    photo: "../assets/teams/thariq.jpg",
    name: "Mr A Thariq Hameed",
    role: "Chair Person",
    links: {
      git: "",
      linkedin: ""
    }
  }
]

const Teamscontainer = styled.section`
  margin-top:${props => props.height + "px"};
  
  

  .hero {
    display: flex;
    justify-content: center;
    min-height: 400px;
    padding: 2rem;

    h1 {
      padding-top: 2rem;
      font-family: var(--font-3);
      font-weight: 800;
      letter-spacing: 5px;
      font-size: 4rem;
    }
  }

  .teams_grid {
    position: relative;
    top: -150px;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 10px;
    padding: 2rem;
    max-width : 1440px;

    .teams_card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
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
        <h1>Meet Our Team</h1>
      </div>

      <section className='teams_grid'>

        {data.map((data, index) => {
          return (
            <div className='teams_card'>
              <div className='teams_img'>
                <img src={data.photo} alt="" srcset="" />
              </div>
              <div className="teams_text">
                <h2>{data.name}</h2>
                <p>{data.role}</p>

                <div className="teams_links">
                  <a href={data.links.linkedin} target='_blank'>
                    <i className="fa-brands fa-linkedin icon"></i>
                  </a>

                  <a href={data.links.git} target='_blank'>
                    <i class="fa-brands fa-github icon"></i>
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </section>

    </Teamscontainer>
  )
}

export default Teams