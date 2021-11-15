import React, { Component } from 'react';
import logo from '../svg/logo.svg';
import {Button} from './Button'
import '../css/Header.css';
import {Icon} from 'react-icons-kit'
import {ic_chevron_right} from 'react-icons-kit/md/ic_chevron_right';
import styled from "styled-components"; // You need this as well
import  {media, generateMedia } from "styled-media-query";
import {NavLink} from 'react-router-dom'
 class Header extends Component {
    render() {
        return (
            <div className="header-container">
               <div className="header-top">
                    <Logo  src={logo} className="logo"/>
                    <NavLink to="/login" className="Navlink">
                            Sign In
                    </NavLink>

               </div>
               <div className="header-content">
                    <h1 className="title">See whats's next</h1>
                    <h2 className="sub-title">WATCH ANYWHERE.CANCEL ANYTIME.</h2>
                    <Button className="main-offer-btn" primary>Try It Now
                     
                    </Button>
               </div>
            </div>
        )
    }
}
export default Header;

const customMedia =generateMedia({
    lgDesktop:'1350px',
    mdDesktop:'1150px',
    tablet:'960px',
    smTablet:'740px'
})
const Logo = styled.img`
    ${customMedia.lessThan('tablet')`
        left:"20%";`
}`;
