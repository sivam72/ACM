import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import acm_1 from "../assets/acm_logo_1.png"
import acm_2 from "../assets/chapter_logo.png"
import { Link } from 'react-router'

const Navcontainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index:9;
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding: 0px 1rem;
    border-bottom:1px solid transparent;

    .logos{
        display:flex;
        align-items:center;
        gap:10px;
        padding:0px;

        img{
            cursor:pointer;
            height:80px;
        }
        img:nth-child(2){
            height:100px;
        }

        @media (max-width: 769px) {
            img {
                height: 60px;
            }
            img:nth-child(2){
                height: 80px;
            }
        }
    }

    .nav_list{
        display: flex;
        gap:10px;

        a{
            font-size: 1.7rem;
            color: #000;
            text-decoration:none;
            font-weight: 500;
            padding: .5rem;
            border:1px solid transparent;
            transition:color 300ms ease,border 300ms ease-out;

            &:hover{
                color: var(--clr_1); 
                /* border-bottom: 1px solid #bbbbbb; */
            }

            &:active{
                color: #ff9900;
            }

            @media (max-width: 1025px) {
                font-size: 1.2rem;
            }

            @media (max-width: 769px) {
                font-size: 1rem;
            }
        }
    }
`

function Navbar(props) {
    const { navState, handlecontact, navHeight } = props;
    
    
    return (
        <Navcontainer className={navState ? "nav" : "scrolled"} ref={navHeight} >
            <div className="logos">
                <a href="https://www.acm.org/" target='_blank'>
                    <img src={acm_2} className='logo' />
                </a>
                <img src={acm_1} className='logo'/>
            </div>

            <nav className="nav_list">
                <Link to={'/'}>Home</Link>
                <Link to={'events'} >Events</Link>
                <Link to={'Gallery'}>Gallery</Link>
                <Link to={'teams'}>Team</Link>
                <Link onClick={handlecontact}>Contact</Link>
            </nav>
        </Navcontainer>
    )
}

export default Navbar