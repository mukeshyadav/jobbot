import React, { Component } from "react";

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

  getPosts = () => {};

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
