import React from 'react'
import styled from 'styled-components'
import acm_1 from "../assets/acm_logo_1.png"
import acm_2 from "../assets/chapter_logo.png"
import { Link } from 'react-router-dom'

const Navcontainer = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding: 0px 1rem;
    background-color:#ffffff;
    border-bottom:1px solid #e0e0e0e0;

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
    }

    .nav_list{
        display: flex;
        gap:30px;

        a{
            font-size: 1.2rem;
            color: #000;
            text-decoration:none;
            transition:color 200ms ease-in;

            &:hover{
                color: #319ddb;
            }

            &:active{
                color: red;
            }
        }
    }
`

function Navbar() {
    return (
        <Navcontainer>
            <div className="logos">
                <a href="https://www.acm.org/" target='_blank'>
                    <img src={acm_2} />
                </a>
                <img src={acm_1} />
            </div>

            <nav className="nav_list">
                <Link to={'Homepage'} replace={true}>Home</Link>
                <Link to={'Events'} repla>Events</Link>
                <Link to={'Gallery'}>Gallery</Link>
                <Link to={'Teams'}>Team</Link>
                <Link to={'Contact'}>Contact</Link>
            </nav>
        </Navcontainer>
    )
}

export default Navbar