import React ,{Component} from 'react';
import Header from '../components/Header'
import TabeComponent from "../components/TabeComponent";
import Footer from "../components/Footer";
class Main extends Component{
    render(){
        return(
            <div>
            <Header/>
            <TabeComponent/>
            <Footer/>
            </div>
        )
    }
}
export default Main;