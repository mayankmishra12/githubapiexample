import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Input from '@material-ui/core/Input';
import ListItems from './ListItems';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography'

import Grid from '@material-ui/core/Grid';
import '../App.css'
class Search extends Component {
 constructor(){
   super();
   this.state = {users:[], input_value: ""}
   
  //  this.handleInputChange = this.handleInputChange.bind(this);
 }
 
 handleInputChange = (event) => {
  // event.preventDefault();
//  let userArray = this.state.users;
//  let user = event.target.user.value;
// let saved_array =  
//  userArray.push(event.target.user.value)

// console.log(user);
return this.SearchInGithub(this.state.input_value);
 
 }

 SearchInGithub(user){
   
   console.log(user);
 return fetch(`https://api.github.com/search/users?q=${user}`, {
    method: 'get',
}).then((res)=>res.json() )
.then((res)=>this.setState({ users :res.items }))
}
 
 
// componentDidMount (){
//   let user =  localStorage.getItem('users')
//   let userArray = user? JSON.parse(user) : [];
//   this.setState({ users :userArray })
 
// } 
onChange=(event)=>{
  this.setState({input_value: event.target.value})
}

 render() {
   console.log(this.state.users)
   return (
    //  {/*<div>
    //  <form onSubmit= {this.handleInputChange} >
    //    <Input 
    //     name = "user"
    //      placeholder="Search for..."
    //    /> 
    //    <Button variant="contained" color="primary" size ="small" type ="submit"> Search</Button>
    //  </form>
    //  <ListItems lists = {this.state.users}  history = {this.props.history}/>
    //  </div>*/}
     
     <div className="main-container">
        <Grid item xs={12} >
          <div className="header">
            <Typography  variant="h4" align='center' style={{color: "#fff"}} gutterBottom>
                Search the github user's
            </Typography>
              <div className="button-box">
              <button className="header-btn" variant="contained" color="primary" size ="small" onClick={()=>this.props.history.push('/')}>Home</button>
 
              <button className="header-btn" variant="contained" color="primary" size ="small" onClick={()=>this.props.history.push('/searcheduser')}>Searched History</button>
              </div>
            </div>
        </Grid>
        <Grid item xs={12} >
            <div className="serach-container">
                <input className="search-input" placeholder="Search Users" value={this.state.input_value} onChange={(e)=>this.onChange(e)}></input>
                <button variant="contained" className="search-btn" color="primary" size ="small" type ="submit" onClick={()=>this.handleInputChange()}> Search</button>
            </div>
        </Grid>
        <Grid item xs={12} >
        <ListItems lists = {this.state.users}  history = {this.props.history}/>
        </Grid>
     </div>

   )
 }
}

export default Search
