import React from 'react';
import './css/App.css'
import Main from './pages/index'
import Login from "./pages/Login";
import{Switch,Route, Router} from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <Switch>
       <Route exact path="/" component={Main}/>
       <Route path="/login" component={Login}/>
     </Switch>
    </div>
  );
}

export default App;
