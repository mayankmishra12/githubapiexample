import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import ListItems from './ListItems';
import FormControl from '@material-ui/core/FormControl';
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
    const listItems = lists.map((item) =>
<li key = {item.login} onClick = {(e)=> {e.preventDefault (); return this.handleclick(item)}}  >
{item.login}   
<button onClick = { (e) => {e.stopPropagation(); return this.deleteItem(item)}} value = {item}>delete</button>
</li>   
   );
   return (
    <ul>
    {listItems}
   </ul>
   )
  }
}
 export default Users;