import React, { Component } from "react";
import { getPosts, getComments } from "./services.js";

const JobBotContext = React.createContext();

class JobBotProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: [],
      isLoader: true
    };
  }

  getPosts = data => {
    getPosts(data).then(resData => {
      this.setState({
        posts: this.state.posts.push(resData)
      });
    });
  };

  getComments = () => {};

  addComment = () => {};

  render() {
    return (
      <JobBotContext.Provider
        value={{
          ...this.state,
          getPosts: this.getPosts,
          getComments: this.getComments,
          addComment: this.addComment
        }}
      >
        {this.props.children}
      </JobBotContext.Provider>
    );
  }
}

export { JobBotProvider };
export default JobBotContext;
