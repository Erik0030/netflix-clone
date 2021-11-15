import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../css/Footer.css'
import {Icon} from 'react-icons-kit';
import {iosWorld} from 'react-icons-kit/ionicons/iosWorld'
import {arrowSortedDown} from 'react-icons-kit/typicons/arrowSortedDown'
 class Footer extends Component {
    render() {
        return (
            <div class="FooterContainer">
                <span style={{marginLeft:'18%',fontSize:'1.125rem'}}>Questions <Link>Call 1-877-742-1335</Link> </span>
                <div className="footer-columns">
                    <ul>
                        <li>
                            <Link>FAQ</Link>
                        </li>
                        <li>
                            <Link>Investor Relations</Link>
                        </li>
                        <li>
                            <Link>Ways to Watch</Link>
                        </li>
                        <li>
                            <Link>Corporate Information</Link>
                        </li>
                        <li>
                            <Link>Netflix Originals</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link>Help Center</Link>
                        </li>
                        <li>
                            <Link>Jobs</Link>
                        </li>
                        <li>
                            <Link>Terms of use</Link>
                        </li>
                        <li>
                            <Link>Contact us</Link>
                        </li>
   
                    </ul>
                    <ul>
                        <li>
                            <Link>Accaunt</Link>
                        </li>
                        <li>
                            <Link>Redeem Gift Cards</Link>
                        </li>
                        <li>
                            <Link>Privacy</Link>
                        </li>
                        <li>
                            <Link>Speed Test</Link>
                        </li>
   
                    </ul>
                    <ul>
                        <li>
                            <Link>Media Center</Link>
                        </li>
                        <li>
                            <Link>Buy Gift Cards</Link>
                        </li>
                        <li>
                            <Link>Cookie Preferences</Link>
                        </li>
                        <li>
                            <Link>Legal Notices</Link>
                        </li>
   
                    </ul>
                    <div className="lang-btn">
                        <Icon icon={iosWorld} size={20}/>
                        English
                        <Icon icon={arrowSortedDown}/>
                    </div>
                </div>
                
                <span className="Netflix-armenia">Netflix Armenia</span>
            </div>
        )
    }
}
export default Footer;