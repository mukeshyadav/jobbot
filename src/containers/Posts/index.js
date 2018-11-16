import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";

import JobBotContext from "../../store.js";
import Post from "../../components/Post";

export default class Posts extends Component {
  state = {
    count: 1
  };
  createPostList = posts => {
    return posts.map((col, index) => (
      <Col key={index} sm={4}>
        <Post {...col} />
      </Col>
    ));
  };

  getMorePost = funcPosts => {
    this.setState({ ...this.state, count: this.state.count + 1 });
    funcPosts({ page: this.state.count });
  };

  render() {
    return (
      <JobBotContext.Consumer>
        {ctx => (
          <React.Fragment>
            <Row className="flex-div">{this.createPostList(ctx.posts)}</Row>
            <Row>
              <Col xs={12}>
                {ctx.hasMorePosts ? (
                  <Button
                    onClick={() => this.getMorePost(ctx.getPosts)}
                    color="link"
                  >
                    Load More
                  </Button>
                ) : (
                  <Button color="danger" className="no-click">
                    No More Posts Available
                  </Button>
                )}
              </Col>
            </Row>
          </React.Fragment>
        )}
      </JobBotContext.Consumer>
    );
  }
}
