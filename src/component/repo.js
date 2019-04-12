import React, { Component } from "react";
class RepoInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { repoinfo: {} };
    this.handleclick = this.handleclick.bind(this);
  }
  componentWillMount() {
    let { state } = this.props.match.param;
    console.log(state);
    fetch(
      `https://api.github.com/repos/${state.username}/${username.reponame}`,
      {
        method: "get"
      }
    )
      .then(res => res.json())
      .then(res => this.setState({ repos: res }));
  }
  render() {
   alert ("adAFC")
  }
}

export default RepoInfo;
