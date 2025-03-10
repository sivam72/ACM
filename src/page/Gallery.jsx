import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const gallery_data = [
  {
    id: 1,
    event: "Lab welcomming",
    year: "2025",
    image: "/Gallery/lab_welcomming_1.jpg"
  },
  {
    id: 2,
    event: "Lab welcomming",
    year: "2025",
    image: "/Gallery/lab_welcomming_2.jpg"
  },
  {
    id: 3,
    event: "Lab welcomming",
    year: "2025",
    image: "/Gallery/lab_welcomming_3.jpg"
  },
  {
    id: 4,
    event: "Lab welcomming",
    year: "2025",
    image: "/Gallery/lab_welcomming_4.jpg"
  }
]

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
      letter-spacing: 5px;
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
    
    .image_container {
      img{
        object-fit: cover;
        height: 500px;
        width: 100%;
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

  return (
    <Gallerycomponent height={height.toString()}>
      <div className='hero background-element'>
        <h1 className='individual_heading'>Explore Our Gallery</h1>
      </div>
      <Galleryview>
        <div className="gallery_grid" >
          {gallery_data.map(data => {
            return (
              <article className='image_container' key={data.id}>
                <img src={data.image} />
              </article>
            )
          })}
        </div>
      </Galleryview>
    </Gallerycomponent>
  )
}

export default Gallery