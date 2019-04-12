import React, { Component } from 'react' ;
class ListItems extends Component {
    constructor(props){
     super(props)
     this.state = {users:[]}
     this.handleclick = this.handleclick.bind(this);
    }
    handleclick (user){
        const { history } = this.props;
        let userArray = this.state.users;
        userArray.push(user);
        localStorage.clear()
        console.log(userArray)
        localStorage.setItem("users",JSON.stringify(userArray)); 
        history.push("/searcheduser")   

    }
    componentWillMount (){
        let userfromstorage = localStorage.getItem("users");
        console.log(userfromstorage)
         let userArray = userfromstorage ? JSON.parse(userfromstorage) : [];
        this.setState({users: userArray}) 
    }
  
    render (){
        let lists = this.props.lists;
        const listItems = lists.map((item) =>
        
         <div className="search-results" key = {item.login}  value ={item.login} onClick = {() =>this.handleclick(item)}>{item.login} </div>   
       );
    
        return (
            <ul className="ul">
            {listItems}
            </ul>
           
        );
    }

    }
    export default ListItems;