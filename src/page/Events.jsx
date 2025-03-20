import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { events_data } from "../data";

const Eventcontainer = styled.section`
  margin-top: ${(props) => props.height + "px"};
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
`;
const Wrapper = styled.section`
  position: relative;
  top: -150px;
  padding: 1rem;
  display: grid;
  place-items: center;

  @media (max-width: 426px) {
    top: -200px;
  }

  .events_grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    padding: 1.5rem;

    @media (max-width: 1025px) {
      grid-template-columns: repeat(1, 1fr);
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

      @media (max-width: 426px) {
        grid-template-columns: repeat(1, 1fr);
        place-items: center;
      }

      .event_poster {
        position: relative;

        img {
          height: 350px;
          width: 100%;
          border: 1px solid #cfcfcfdf;
          border-radius: 5px;
        }
      }

      .text_content {
        padding: 1rem;

        .event_name {
          margin: 0;
          font-size: 2.3rem;
          font-weight: 700;
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

        @media (max-width: 426px) {
          text-align: center;
        }
      }
    }
  }
`;

const Statuslabel = styled.span`
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: ${props =>(props.$status)?"#fff":"#000"};
  font-family: var(--font-4);
  font-size: 1rem;
  font-weight: 600;
  padding: .5rem 1rem;
  background-color: ${props => (props.$status)? "var(--clr_1)":"#fff"};
  border-radius: 10px;
`

function Events(props) {
  const { navHeight } = props;
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(navHeight.current.offsetHeight);
    
  }, []);

  return (
    <Eventcontainer height={height}>
      <div className="hero background-element">
        <h1 className="individual_heading">Events</h1>
      </div>

      <Wrapper>
        <div className="events_grid">
          {[...events_data].reverse().map((data) => {
            return (
              <article className="event_card" key={data.id}>
                <div className="event_poster">
                  <img src={data.image} />
                  <Statuslabel $status={(data.status == "Finished")? true : false}>{data.status}</Statuslabel>
                </div>
                <div className="text_content">
                  <h2 className="event_name">{data.event_name}</h2>
                  <div className="time_text">
                    <p className="date">Date : {data.date}</p>
                    <p className="description">{data.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Wrapper>
    </Eventcontainer>
  );
}

export default Events;
