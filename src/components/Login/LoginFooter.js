import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../../css/LoginFooter.css'
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
                            <Link>Gitf Card Terms</Link>
                        </li>
                        
                    </ul>
                    <ul>
                        <li>
                            <Link>Terms of Use</Link>
                        </li>
                       
   
                    </ul>
                    <ul>
                        <li>
                            <Link>Privacy Statment</Link>
                        </li>
                        
   
                    </ul>
                    <ul>
                        <li>
                           
                        </li>
                        <li>
                            
                        </li>
                        <li>
                            
                        </li>
                        <li>
                            
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