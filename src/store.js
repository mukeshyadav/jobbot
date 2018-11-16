import React, { Component } from "react";
import { getPosts, getComments, getArrayData } from "./services.js";

const JobBotContext = React.createContext();

class JobBotProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: [],
      isLoader: true,
      hasMorePosts: true,
      hasMoreComments: true
    };
  }

  getPosts = data => {
    this.setLoaderState(true);
    getPosts(data).then(resData => {
      if (resData.length > 0) {
        const posts = getArrayData(this.state.posts, resData);
        this.setState({
          posts: posts
        });
      } else {
        this.setState({ hasMorePosts: false });
      }
      this.setLoaderState(false);
    });
  };

  getComments = params => {
    this.setLoaderState(true);
    getComments(params).then(resData => {
      if (resData.length > 0) {
        const comments = getArrayData(this.state.comments, resData);
        this.setState({
          comments: comments
        });
      } else {
        this.setState({ hasMoreComments: false });
      }
      this.setLoaderState(false);
    });
  };

  setLoaderState = boolValLoader => {
    this.setState({ isLoader: boolValLoader });
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
