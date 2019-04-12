import React, { Component } from 'react' ;
class UserInfo extends Component {
    constructor(props){
     super(props)
     this.state = {repos:[]}
     this.handleclick = this.handleclick.bind(this);
    }
 
    handleclick (item) {
       this.props.history.push (
           { pathname: '/repos',
           state: { username: item.owner.name, reponame :item.name }}
       )
    }
    componentWillMount (){
        const { user } = this.props.match.params;
         fetch(`https://api.github.com/users/${user}/repos`, {
            method: 'get',
        }).then((res)=>res.json() )
        .then((res => this.setState({repos :res})))
        }
    
    render (){
        let lists = this.state.repos;
        const listItems = lists.map((item) => 
  <li key = {item.login}  value ={item.login} onClick = {() =>this.handleclick(item)}>{item.name} </li>   
       );
        return (
            <ul>
            {listItems}
            </ul>
        )
    }
}
export default UserInfo;