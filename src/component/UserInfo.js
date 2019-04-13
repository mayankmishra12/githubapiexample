import React, { Component } from 'react' ;

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import MenuIcon from '@material-ui/icons/Menu';

const styles = {
    root: {
    //   flexGrow: 1,
        height: '100vh',
        backgroundColor: '#c8d6e5',
        overflow: 'hidden'
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    paper: {
        width: '75%',
        display: 'flex',
        justifyContent: 'center',
        padding: 8 * 2,
        textAlign: 'center',
        color: '#ffff',
        backgroundColor: '#576574'
      },
    list: {
        display: 'flex',
        justifyContent: 'center',
        margin: '10px 0px'
    },
    bar:{
        backgroundColor: '#222f3e',
    }
  };
class UserInfo extends Component {
    constructor(props){
     super(props)
     this.state = {repos:[]}
     this.handleclick = this.handleclick.bind(this);
    }
 
    handleclick (item) {
       this.props.history.push (`/repos/${item.owner.login}/${item.name}`)
    }
    componentWillMount (){
        const { user } = this.props.match.params;
         fetch(`https://api.github.com/users/${user}/repos`, {
            method: 'get',
        }).then((res)=>res.json() )
        .then((res => this.setState({repos :res})))
        }
    
    render (){
        const { classes } = this.props;
        let lists = this.state.repos;
        console.log(lists)
        const listItems = lists.map((item, index) => 
        {
            return(
            <Grid container spacing={24} key={index} >
            <Grid item xs={12} className={classes.list}>
                <Paper className={classes.paper} onClick = {() =>this.handleclick(item)}>{item.name}</Paper>
            </Grid>
        </Grid>
            )
        }
       );
        return (
            // <ul>
            // 
            // </ul>
            <div className={classes.root}>
            <AppBar position="static" className={classes.bar}>
              <Toolbar>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                 
                </IconButton>
                <Typography variant="h6" color="inherit" className={classes.grow}>
                 {this.props.match.params.user}
                </Typography>
                <Button color="inherit">Home</Button>
              </Toolbar>
            </AppBar>
            {listItems}
          </div>
        )
    }
}

UserInfo.propTypes = {
    classes: PropTypes.object.isRequired,
  };
// export default UserInfo;
export default withStyles(styles)(UserInfo);