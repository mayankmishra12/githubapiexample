import React, { Component } from "react";
// import  '../const';
// import { host } from "../const";
import constant from '../constatnt'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import Grid from '@material-ui/core/Grid';

const styles = theme => ({

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
  bar:{
    backgroundColor: '#222f3e',
},
card: {
  // maxWidth: 400,
  maxHeight: '500px',
  margin: '10px'
},
media: {
  height: 0,
  // paddingTop: '56.25%', // 16:9
},
actions: {
  display: 'flex',
},
expand: {
  transform: 'rotate(0deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
},
expandOpen: {
  transform: 'rotate(180deg)',
},
avatar: {
  backgroundColor: red[500],
},
label_text: {
  margin: '10px',
  color: '#222f3e',
  fontSize: '22px'
},
text:{
  margin: '10px',
  color: '#273c75',
  fontSize: '22px'

},
repo_info:{
  display: 'flex',
  padding: '0px 10px !important'
}
});
class RepoInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { repoinfo: {}, expanded: false };
    this.clickOnHome = this.clickOnHome.bind(this);
    this.clickOnHistory  = this.clickOnHistory.bind(this);
    // this.handleclick = this.handleclick.bind(this);
  }
  clickOnHome (e) {
    this.props.history.push("/")
     }
     clickOnHistory(){
      this.props.history.push("/searcheduser")
     }
  componentWillMount() {
   let user = this.props.match.params.user;
   let repo = this.props.match.params.repo;
   fetch(`https://api.github.com/repos/${user}/${repo}`, {
            method: 'get',
        }).then((res)=>res.json() )
        .then((res => this.setState({repoinfo:res})))
        }

        handleExpandClick = () => {
          this.setState(state => ({ expanded: !state.expanded }));
        };
      
      
       
  render() {
    const { classes } = this.props;
    console.log(this.state.repoinfo)

  return(
    <div className={classes.root}>
    <AppBar position="static" className={classes.bar}>
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
         
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          {this.props.match.params.user}
        </Typography>
        <Button color="inherit" onClick = {this.clickOnHome}>Home</Button>
        <Button color="inherit" onClick = {this.clickOnHistory}>SearchedHistory</Button>
      </Toolbar>
    </AppBar>
    <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
              
            </IconButton>
          }
          title={this.props.match.params.repo}
          
        />
        <CardContent>
        <Grid container spacing={24}>
        <Grid item xs={12} className={classes.repo_info}>
          <Typography component="p" className={classes.label_text} component="h2" variant="display1" gutterBottom>
            Repository created on : 
          </Typography>
          <Typography component="p" className={classes.text} component="h2" variant="display1" gutterBottom>
             {this.state.repoinfo.created_at}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.repo_info}>
          <Typography component="p" className={classes.label_text} component="h2" variant="display1" gutterBottom>
            Repository Updated on :
          </Typography>
          <Typography component="p" className={classes.text} component="h2" variant="display1" gutterBottom>
            {this.state.repoinfo.updated_at}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.repo_info}>
          <Typography component="p" className={classes.label_text} component="h2" variant="display1" gutterBottom>
            Description :
          </Typography>
          <Typography component="p" className={classes.text} component="h2" variant="display1" gutterBottom>
            {this.state.repoinfo.description}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.repo_info}>
          <Typography component="p" className={classes.label_text} component="h2" variant="display1" gutterBottom>
              Download Repository : 
          </Typography>
          <Typography component="p" className={classes.text} component="h2" variant="display1" gutterBottom style={{cursor:'pointer'}}>
          {this.state.repoinfo.downloads_url}
          </Typography>
        </Grid>
        </Grid>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>

            <Grid container spacing={24}>
        <Grid item xs={12} className={classes.repo_info}>
          <Typography component="p" className={classes.label_text} component="h2" variant="display1" gutterBottom>
            Contribution url:
          </Typography>
          <Typography component="p" className={classes.text} component="h2" variant="display1" gutterBottom style={{cursor:'pointer'}}>
          {this.state.repoinfo.contributors_url}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.repo_info}>
          <Typography component="p" className={classes.label_text} component="h2" variant="display1" gutterBottom>
          notifications_url
          </Typography>
          <Typography component="p" className={classes.text} component="h2" variant="display1" gutterBottom style={{cursor:'pointer'}}>
          {this.state.repoinfo.notifications_url}
          </Typography>
        </Grid>
        </Grid>
            
          </CardContent>
        </Collapse>
      </Card>
    </div>
  )
  }
}

RepoInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RepoInfo);