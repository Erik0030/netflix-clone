import React, { Component } from 'react'
import logo from '../svg/logo.svg'
import  {media, generateMedia } from "styled-media-query";

import styled from 'styled-components'
import LoginForm from '../components/Login/LoginForm'
import  LoginFooter from '../components/Login/LoginFooter'
 class Login extends Component {
    render() {
        return (
            <div className="main-login-container">
                <div className="header-top">
                        <Logo src={logo} alt="logo" className="logo-login" />
                </div>
                <LoginForm/>
                <LoginFooter/>
            </div>
        )
    }
}
export default Login;
const coustomMedia = generateMedia({
    tablet:'640px',
    lgTablet:'740px'
})
//Logo
const Logo = styled.img `
    width:11rem;
    position:absolute;
    top:25%;
    left:11%;
    transform:translate(-50%,-50%);
    margin-left:0;
    ${coustomMedia.lessThan('tablet')`
        top:45%;
        left:23%
    `}
`;