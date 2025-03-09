import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import acm_1 from "../assets/acm_logo_1.png"
import acm_2 from "../assets/chapter_logo.png"
import velammal_footer_logo from "../assets/footer_logo.png"

const Wrapper = styled.footer`
    position: relative; 
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #000000;
    color: #fff;
    
`

const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 100px;
    padding: 1.5rem;
    max-width: 1440px;
    margin: 0 auto;

    .footer_logo{
        display: grid;
        place-items: center;
        .logos{
            display:flex;
            align-items:center;
            padding:0px;
            gap: 1.2rem;

            img{
                cursor:pointer;
                height:80px;
            }
            img:nth-child(2){
                height:100px;
            }
    }
    }

    .nav_list{
        display: flex;
        flex-direction: column;

        a{
            font-size: 1.1rem;
            color: #fff;
            text-decoration:none;
            transition:color 200ms ease-in;
            padding: .2rem;
            border:1px solid transparent;
            transition:color 300ms ease,border 300ms ease-out;

            &:hover{
                color: var(--clr_1); 
            }

            &:active{
                color: #ff9900;
            }
        }
    }
`

export default function Footer() {
    return (
        <Wrapper>
            <FooterContainer>
                <div className='footer_logo'>
                    <img src={velammal_footer_logo} />
                    <div className="logos">
                        <a href="https://www.acm.org/" target='_blank'>
                            <img src={acm_2} />
                        </a>
                        <img src={acm_1} />
                    </div>
                </div>
                <div>
                    <h4>Navigate Links</h4>

                    <nav className="nav_list">
                        <Link to={'Homepage'}>Home</Link>
                        <Link to={'Events'}>Events</Link>
                        <Link to={'Gallery'}>Gallery</Link>
                        <Link to={'Teams'}>Team</Link>
                    </nav>
                </div>
                <div>
                    <h4>Contact</h4>
                    <p></p>
                </div>
            </FooterContainer>
        </Wrapper>
    )
}