import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const events_data = [
  {
    id: 1,
    image: "/Events/event_1.jpg",
    event_name: "Code Combat - ACM Inaugural",
    date: "11th Mar 2025",
    year: "2025",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusantium impedit quisquam numquam ut vel tempora exercitationem. Voluptatibus consequuntur, voluptatem quo rerum dolorem libero necessitatibus nobis voluptates perferendis eum repellat."
  },
  {
    id: 2,
    image: "/Events/event_2.jpg",
    event_name: "TechTime Trivia - ACM Inaugural",
    date: "11th Mar 2025",
    year: "2025",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusantium impedit quisquam numquam ut vel tempora exercitationem. Voluptatibus consequuntur, voluptatem quo rerum dolorem libero necessitatibus nobis voluptates perferendis eum repellat."
  },
  {
    id: 3,
    image: "/Events/event_3.jpg",
    event_name: "Lab Welcomming Session",
    date: "24th Feb 2025",
    year: "2025",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusantium impedit quisquam numquam ut vel tempora exercitationem. Voluptatibus consequuntur, voluptatem quo rerum dolorem libero necessitatibus nobis voluptates perferendis eum repellat."
  }
]

const Eventcontainer = styled.section`
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
      letter-spacing: 5px;
      
    }
  }
`
const Wrapper = styled.section`
  position: relative;
  top: -150px;
  padding: 1rem;
  display: grid;
  place-items: center;

  .events_grid { 
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 20px;
    padding: 1.5rem;

    @media (max-width: 1025px) {
      grid-template-columns: repeat(1,1fr);
      grid-gap: 40px;
    }

    
    .event_card {
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-gap: 10px;
      max-width: 750px;
      padding: 1.1rem;
      border-radius: 10px;
      background-color: #fff;
      box-shadow: 1px 1px 10px #afafafdf;

      .event_poster {
        img {
          height: 300px;
        }
      }

      .text_content {
        padding: 1rem;

        .event_name {
          margin: 0;
          font-size: 2.3rem;
          font-weight: 700
        }
        .time_text {
            margin-top: 1rem;
            .date {
              margin: 0;
              font-size: 1.1rem;
              font-weight: 700;
            }
            .description {
              margin: 0;
            }
          }
        }
    }
  }
`

function Events(props) {
  const { navHeight } = props;
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(navHeight.current.offsetHeight)
    // console.log(height);
  }, [])
  return (
    <Eventcontainer height={height.toString()}>
      <div className='hero background-element'>
        <h1 className='individual_heading'>Events</h1>
      </div>

      <Wrapper>
        <div className="events_grid">
          {events_data.map(data => {
            return (
              <article className='event_card' key={data.id}>
                <div className='event_poster'>
                  <img src={data.image} />
                </div>
                <div className='text_content'>
                  <h2 className='event_name'>{data.event_name}</h2>
                  <div className='time_text'>
                    <p className='date'>Date : {data.date}</p>
                    <p className='description'>{data.description}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </Wrapper>
    </Eventcontainer>
  )
}

export default Events