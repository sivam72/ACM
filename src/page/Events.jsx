import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

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

function Events(props) {
  const { navHeight } = props;
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(navHeight.current.offsetHeight)
    // console.log(height);
  }, [])
  return (
    <Hero className="background-element" >
      
    </Hero>
  )
}

export default Events