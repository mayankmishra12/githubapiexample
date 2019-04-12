import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Input from '@material-ui/core/Input';
import ListItems from './ListItems';
import FormControl from '@material-ui/core/FormControl';
class Search extends Component {
 constructor(){
   super();
   this.state = {users:[]}
   this.handleInputChange = this.handleInputChange.bind(this);
 }
 
 handleInputChange  (event) {
  event.preventDefault();
 let userArray = this.state.users;
 let user = event.target.user.value;
 userArray.push(event.target.user.value)

console.log(user);
return this.SearchInGithub(user);
 
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
 render() {
   return (
     <div>
     <form onSubmit= {this.handleInputChange} >
       <Input 
        name = "user"
         placeholder="Search for..."
       /> 
       <Button variant="contained" color="primary" size ="small" type ="submit"> Search</Button>
     </form>
     <ListItems lists = {this.state.users}  history = {this.props.history}/>
     </div>
   )
 }
}

export default Search
