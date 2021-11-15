import React from 'react'
import {Button} from './Button'
import styled from 'styled-components'
import '../css/TabComponentThree.css'
import {Icon} from 'react-icons-kit'
import {ic_check} from 'react-icons-kit/md/ic_check'
import {ic_close} from 'react-icons-kit/md/ic_close'
 function TabComponentThree() {
    return (
        <TabContainerThree>
            <div className="tab-content-3">
                <div className="tab-top-contnent-3">
                        <span class="span-3">Choose one plan and watch everything on Netflix.</span>
                        <Button className="btn-3">try it now</Button>
                </div>
                <div className="tab-bottom-content-3">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Basic</th>
                                <th>Standart</th>
                                <th>Premium</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Monthly price</td>
                                <td>$9.99</td>
                                <td>$13.99</td>
                                <td>$16.99</td>
                            </tr>
                            <tr>
                                <td>HD available</td>
                                <td>
                                    <Icon icon={ic_close} size={32}/>
                                </td>
                                <td>
                                    <Icon icon={ic_check} size={32}/>
                                </td>
                                <td>
                                    <Icon icon={ic_check} size={32}/>
                                </td>

                                
                            </tr>
                            <tr>
                                <td>Ultra HD available</td>
                                <td>
                                    <Icon icon={ic_close} size={32}/>
                                </td>
                                <td>
                                    <Icon icon={ic_close} size={32}/>
                                </td>
                                <td>
                                    <Icon icon={ic_check} size={32}/>
                                </td>

                                
                            </tr>
                            <tr>
                                <td>Screens you can watch at the same time</td>
                                <td>
                                    1
                                </td>
                                <td>
                                    2
                                </td>
                                <td>
                                    4
                                </td>
                            </tr>    
                            <tr>
                                <td>Watch on your laptop, TV, phone and tablet. </td>
                                <td>
                                    <Icon icon={ic_check} size={32}/>
                                </td>
                                <td>
                                    <Icon icon={ic_check} size={32}/>
                                </td>
                                <td>
                                    <Icon icon={ic_check} size={32}/>
                                </td>

                                
                            </tr>
                            <tr>
                                <td>Unlimited movies and TV shows. </td>
                                <td>
                                    <Icon icon={ic_check} size={32}/>
                                </td>
                                <td>
                                    <Icon icon={ic_check} size={32}/>
                                </td>
                                <td>
                                    <Icon icon={ic_check} size={32}/>
                                </td>

                                
                            </tr>    
                            <tr>
                                <td>Cancle anytime. </td>
                                <td>
                                    <Icon icon={ic_check} size={32}/>
                                </td>
                                <td>
                                    <Icon icon={ic_check} size={32}/>
                                </td>
                                <td>
                                    <Icon icon={ic_check} size={32}/>
                                </td>

                                
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </TabContainerThree>
    )
}
export default TabComponentThree;
const TabContainerThree = styled.div`
    background:var(--main-deep-dark);
  
`;