import React from 'react'
import {Button} from  './Button'
import styled from 'styled-components';
import ImgTablet from '../images/tab-tablet.png'
import ImgTv from '../images/tab-tv.png'
import ImgMacbook from '../images/tab-macbook.png'
import '../css/TabComponentTwo.css'


 function TabComponentTwo() {
    return (
        <div className="div">
            <div className="tab-content-1">
                    <div className="tab-top-content-1">
                        <span className="span">
                            Watch TV shows and movies anytime, anywhere - personalized for you.
                        </span>
                        <Button className="btn-1">try it now</Button>
                    </div>
                    <div className="tab-bottom-content-1">
                            <div>
                                <img src={ImgTv} style={{width:'18.75rem'}} />
                                <h3>Watch on your TV</h3>
                                <p className="main-text">Smart TVs, PlayStations, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                            </div>
                            <div className="tablet-1">
                                <img src={ImgTablet} className="tablet"  />
                                <h3>Watch instantly or download for later</h3>
                                <p className="main-text">Available on phone or tablet, whenever you are.</p>
                            </div>
                            <div>
                                <img src={ImgMacbook} style={{width:'18.75rem', paddingTop:'0.625rem',paddingBottom:'0.625rem'}}  />
                                <h3>Use any computer</h3>
                                <p className="main-text">Watch right on Netflix.com </p>
                            </div>
                    </div>
            </div>
        </div>
    )
}
export default  TabComponentTwo;
