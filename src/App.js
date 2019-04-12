import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import Search from  './component/search';
import Users from './component/users'
import UserInfo from './component/UserInfo'
import RepoInfo from "./component/repo";
class App extends Component {
  constructor(props) {
    super(props)
    this.state = { users: [] }
  }
  render() {
    return (

      <div>
        <Router>
          <div> 
   
   {/* <Link to = "/">  <Button variant="contained" color="primary" size ="small" >Home</Button>
    </Link>
    <Link to = "/searcheduser"> <Button variant="contained" color="primary" size ="small">searcheduser</Button>
             </Link> */}
             <Route exact path = "/" component = {Search}/>
            <Route  exact path = "/searcheduser" component = {Users}/>
            <Route  exact path="/searcheduser/:user" component={UserInfo}/>
            <Route  exact path="/repos" component={RepoInfo}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;



