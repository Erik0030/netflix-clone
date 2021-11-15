import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../css/TabsNav.css';
import TabeComponentOne from "./TabComponentOne";
import TabDevices from "../components/tabs_nav/TabDevices";
import TabsDoor from "../components/tabs_nav/TabsDoor";
import TabPrice from '../components/tabs_nav/TabPrice';
import TabeComponentTwo from './TabComponentTwo'
import TabeComponentThree from './TabComponentThree'
 class TabeComponent extends Component {
     state = {
         tabIndex:0,
     }
    render() {
        return (
            <div>
                <Tabs 
                className="tab" 
                selectedIndex={this.state.tabIndex}
                onSelect={tabIndex => this.setState({tabIndex})}
                >
                    <TabList className="tab-nav-container">
                        <Tab className={`${this.state.tabIndex === 0 ? 'tab-selected active':null}`}>
                            <TabsDoor/>
                            <p className="lgScreen" style={{marginBottom:'1.875rem'}}><strong>No commitments</strong><br/>
                            Cancel online at anytime
                            </p>
                            <br/>
                            <span className="mdScreen" style={{marginTop:'0.4rem'}}>Cancal</span>
                        </Tab >
                        <Tab className={`${this.state.tabIndex === 1 ? ' tab-selected active':null}`}>
                            <TabDevices/>
                            <p className="lgScreen"style={{marginTop:'-5.3125rem'}}><strong>Watch anywher</strong></p>
                            <span className="mdScreen" style={{marginTop:'-5.3125rem'}}>Devices</span>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 2 ? ' tab-selected active':null}`}>
                            <TabPrice/>
                            <p className="lgScreen"><strong>Pick your price</strong></p>
                            <br/>
                            <span className="mdScreen">Price</span>
                        </Tab>

                    </TabList>
                    {/*tabs content*/ }
                    <TabPanel>
                           <TabeComponentOne/> 
                    </TabPanel>
                    <TabPanel>
                           <TabeComponentTwo/> 
                    </TabPanel>
                    <TabPanel>
                           <TabeComponentThree/> 
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}
export default TabeComponent;