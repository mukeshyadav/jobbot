import React, { Component } from "react";
import { Button, Col, ListGroup, Row } from "reactstrap";
import Post from "../../components/Post/";
import Comment from "../../components/Comment";
import JobBotContext from "../../store.js";

export default class Comments extends Component {
  state = {
    count: 1
  };

  componentDidMount = () => {
    const context = this.context;
    context.getComments({ page: 1, id: this.props.match.params.id });
    this.setState({ ...this.state.count, count: this.state.count + 1 });
  };

  createCommentList = comments => {
    return comments.map((comment, index) => (
      <Comment {...comment} key={index} />
    ));
  };

  getMoreComments = funcPosts => {
    this.setState({ ...this.state, count: this.state.count + 1 });
    funcPosts({ page: this.state.count, id: this.props.match.params.id });
  };

  render() {
    return (
      <JobBotContext.Consumer>
        {ctx => (
          <Row className="flex-div">
            <Col sm={5} className="card-without-link">
              <Post
                {...ctx.posts[this.props.match.params.id - 1]}
                isLink={true}
              />
            </Col>
            <Col sm={7}>
              <ListGroup flush>
                {this.createCommentList(ctx.comments)}
                {ctx.hasMoreComments ? (
                  <Button
                    color="link"
                    onClick={() => this.getMoreComments(ctx.getComments)}
                  >
                    Load More
                  </Button>
                ) : (
                  <Button color="danger" className="no-click">
                    No More Comments Available for this Post
                  </Button>
                )}
              </ListGroup>
            </Col>
          </Row>
        )}
      </JobBotContext.Consumer>
    );
  }
}

Comments.contextType = JobBotContext;
