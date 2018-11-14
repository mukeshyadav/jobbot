import React, { Component } from "react";
import { getPosts, getComments, getArrayData } from "./services.js";

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
      const posts = getArrayData(this.state.posts, resData);
      this.setState({
        posts: posts
      });
    });
  };

  getComments = params => {
    getComments(params).then(resData => {
      const comments = getArrayData(this.state.comments, resData);
      this.setState({
        comments: comments
      });
    });
  };

  addComment = () => {};

  componentDidMount = () => {
    this.getPosts();
  };

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
