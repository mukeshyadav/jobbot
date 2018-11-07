import React from 'react'
import { Button, Col, ListGroup, Row } from 'reactstrap'
import Post from '../../components/Post/'
import Comment from '../../components/Comment'

const Comments = () => {
  return (
    <Row>
      <Col>
      <Post />
      </Col>
      <Col>
      <ListGroup flush>
        <Comment />
        <Comment />
        <Comment />
        <Button color='link'>
          Load More
        </Button>
      </ListGroup>
      </Col>
    </Row>
  )
}

export default Comments
