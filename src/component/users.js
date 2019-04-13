import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import ListItems from './ListItems';
import FormControl from '@material-ui/core/FormControl';

import Typography from '@material-ui/core/Typography'

import Grid from '@material-ui/core/Grid';
class Users extends Component {
 constructor(props){
   super(props);
   this.state = {users:[]}
   this.handleclick = this.handleclick.bind(this);
   this.deleteItem = this.deleteItem.bind(this);
 }

 deleteItem (item) {
let users= this.state.users;
let userArray = users.filter ((obj) => obj.login != item.login);
localStorage.setItem("users",JSON.stringify(userArray))
this.setState({users :userArray});
 }
 
 handleclick (items){

 this.props.history.push(`/searcheduser/${items.login}`);
 }

 componentDidMount (){
    let user =  localStorage.getItem('users')
    let userArray = user? JSON.parse(user) : [];
    userArray = userArray.reverse() ;
    this.setState({ users :userArray })

  } 
  render (){
    let lists = this.state.users;
    console.log("list", lists)
    const listItems = lists.map((item, index) =>
        // <li key = {item.login} onClick = {(e)=> {e.preventDefault (); return this.handleclick(item)}}  >
        // {item.login}   
        // <button onClick = { (e) => {e.stopPropagation(); return this.deleteItem(item)}} value = {item}>delete</button>
        // </li>   

        <Grid xs={12} key={index}>
        <div className="history-container">
        <div className="search-results history-result" key = {item.login}  value ={item.login} onClick = {() =>this.handleclick(item)}>
          <span>{item.login}</span>
          <button className="del-btn" onClick = { (e) => {e.stopPropagation(); return this.deleteItem(item)}} value = {item}>delete</button>
        </div> 
        </div>
     </Grid>
   );
   return (
    <div className="main-container" >
    <Grid item xs={12} >
      <div className="header">
        <Typography align='center' style={{color: "#fff"}} gutterBottom className="header-text">
            Users Searched History
        </Typography>
          <div className="button-box">
          <button className="header-btn" variant="contained" color="primary" size ="small" onClick={()=>this.props.history.push('/')}>Home</button>

          {/* <button className="header-btn" variant="contained" color="primary" size ="small" onClick={()=>this.props.history.push('/searcheduser')}>Searched History</button> */}
          </div>
        </div>
    </Grid>
    {listItems}
    </div>
   )
  }
}
 export default Users;