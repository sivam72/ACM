import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { gallery_data } from '../data'

const Gallerycomponent = styled.section`
  margin-top:${props => props.height + "px"};
  min-height: 100dvh;

  .hero {
    display: flex;
    justify-content: center;
    align-items: center; 
    min-height: 300px;
    padding: 2rem;

    h1 {
      font-family: var(--font-3);
      font-weight: 800;
      text-align: center;
      letter-spacing: 5px;
    }
  }

  .gallery_nav {
    display: flex;
    justify-content: center;
    padding: 1rem;

    .nav_arrow {
      background-color: #fff;
      width: 100px;
      border: 1px solid var(--clr_1);
      border-radius: 5px;
      margin:0px 5px ;
      font-family: var(--font-2);
      font-size: 3rem;
      font-weight: 700;
      transition: background-color 300ms;

      &:hover {
        background-color: var(--clr_1);
      }

      &:active {
        background-color: color.scale(#f0a80c, $lightness: 10%);
      }

      @media (max-width: 1025px){
        width: 150px;
        font-size: 2.5rem;
      }

      @media (max-width: 769px){
        width: 100px;
        font-size: 2rem;
      }
    }
  }
`
const Galleryview = styled.section`
  display: grid;
  place-content: center; 

  .gallery_grid {
    max-width: 1440px;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 10px;
    padding: 1.5rem;

    @media (max-width: 1025px) {
      grid-template-columns: repeat(2,1fr);
    }

    @media (max-width: 426px) {
      grid-template-columns: repeat(1,1fr);
    }
    
    .image_container {
      img{
        position: relative;
        object-fit: cover;
        height: 500px;
        width: 100%;

        transition: scale 300ms ease,
                    border-radius 200ms ease-in;

        &:hover {
          cursor: pointer;
          z-index: 5;
          scale: 102%;
        }
      }
    }
  }
`

function Gallery(props) {
  const { navHeight } = props;
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(navHeight.current.offsetHeight)
  }, [])

  const [start, setStart] = useState(gallery_data[gallery_data.length - 1].id);
  const [end, setEnd] = useState((gallery_data[gallery_data.length - 1].id) - 5);

  const handlePrev = () => {
    if (start == gallery_data[gallery_data.length - 1].id && end == (gallery_data[gallery_data.length - 1].id) - 5) {
      setStart(gallery_data[gallery_data.length - 1].id);
      setEnd((gallery_data[gallery_data.length - 1].id) - 5);
    } else {
      setEnd(start)
      if (start + 5 <= gallery_data.length) {
        setStart(prev => prev + 5);
      } else {
        setStart(gallery_data.length);
      }
    }
  }

  const handleNext = () => {
    if (start == 5 && end == 0) {
      setStart(5);
      setEnd(0);
    } else {
      setStart(end)
      if (start - 5 < 0) {
        setEnd(1);
      } else {
        setEnd(prev => prev - 5);
      }
    }
  }

  return (
    <Gallerycomponent height={height.toString()}>
      <div className='hero background-element'>
        <h1 className='individual_heading'>Explore Our Gallery</h1>
      </div>
      <Galleryview>
        <div className="gallery_grid" >
          {[...gallery_data].reverse().filter(data => data.id <= start && data.id >= end).map(data => {
            return (
              <article className='image_container' key={data.id}>
                <img src={data.image} />
              </article>)
          })}
        </div>
      </Galleryview>
      <div className='gallery_nav'>
        <button className='nav_arrow' onClick={handlePrev}>{'<'}</button>
        <button className='nav_arrow' onClick={handleNext}>{'>'}</button>
      </div>
    </Gallerycomponent>
  )
}

export default Gallery