import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";

import JobBotContext from "../../store.js";
import Post from "../../components/Post";

export default class Posts extends Component {
  createPostList = posts => {
    debugger;
    return posts.map(col => (
      <Col>
        <Post {...col} />
      </Col>
    ));
  };
  render() {
    return (
      <JobBotContext.Consumer>
        {ctx => (
          <React.Fragment>
            <Row>{this.createPostList(ctx.posts)}</Row>

            <Row>
              <Col>
                <Button onClick={ctx.getPosts} color="link">
                  Load More
                </Button>
              </Col>
            </Row>
          </React.Fragment>
        )}
      </JobBotContext.Consumer>
    );
  }
}
