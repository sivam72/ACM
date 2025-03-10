import React from 'react'
import styled from 'styled-components'

const features_list = [
    {
        num: '01',
        title: "Contests",
        content: "Lorem ipsum dolor sit amet consectetur omnis? Autem repudiandae sint iusto labore!"
    },
    {
        num: '02',
        title: "Hackathons",
        content: "Lorem ipsum dolor sit amet consectetur omnis? Autem repudiandae sint iusto labore!"
    },
    {
        num: '03',
        title: "Talks",
        content: "Lorem ipsum dolor sit amet consectetur omnis? Autem repudiandae sint iusto labore!"
    },
    {
        num: '04',
        title: "Workshops",
        content: "Lorem ipsum dolor sit amet consectetur omnis? Autem repudiandae sint iusto labore!"
    }
]

const Featurescontainer = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(3,1fr);

    @media (max-width: 426px) {
        grid-template-columns: repeat(1,1fr);
    }

    p {
      margin:0px;
    }

    .features_card {
        padding: 1em;

        .features_text {
            display: flex;
            align-items: center;
            gap: 20px;

            .feastures_title {
                color: var(--clr_1); 
                font-weight: 700;
                font-size: 4rem;
            }

            h4{
                font-size: 2rem;
                font-weight: 700;
                margin:0;
            }
        }

        .features_content{
            margin-top: 1rem;
            p {
                font-size: 1.7rem;
            }
        }

        @media (max-width: 1025px) {
            .features_text {
                .feastures_title {
                    font-size: 3rem;
                }
                h4 {
                    font-size: 1.5rem;
                }
            }
            .features_content{
                p {
                    font-size: 1.2rem;
                }
            }
        }

        @media (max-width: 769px) {
            .features_text {
                .feastures_title {
                    font-size: 2.6rem;
                }
                h4 {
                    font-size: 1.3rem;
                }
            }
            .features_content{
                p {
                    font-size: 1rem;
                }
            }
        }
    }
    
  
`

function Featues() {
    return (
        <Featurescontainer>
            {
                features_list.map((data, index) => {
                    return (
                        <div className='features_card' key={index}>
                            <div className='features_text'>
                                <p className='feastures_title'>{data.num}</p>
                                <h4>{data.title}</h4>
                            </div>

                            <div className='features_content'>
                                <p>{data.content}</p>
                            </div>
                        </div>
                    )
                })
            }
        </Featurescontainer>
    )
}

export default Featues;