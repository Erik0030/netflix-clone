import React from 'react'
import  Img from '../images/tab-1-pic.png';
import '../css/TabComponentOne.css'
import {Button} from './Button'
 function TabComponentOne() {
    return (
        <div className="TableContentContainer">
            <div className="container">
                <div className="tab-content">
                    <div>
                    <span className="title-1" style={{marginBottom:'2rem'}} >
                    If you decide Netflix isn't for you - no problem.No  commitent.Cancel online anytime.
                    </span>
                    <br/>
                    <Button style={{marginTop:'2rem'}}>try it now</Button>
                    </div>
                    <img src={Img} className="TabelContentImageOne"/>
                </div>
            </div>
        </div>
    )
}
export default TabComponentOne;