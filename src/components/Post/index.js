import React from 'react'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'

const Post = (props) => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag='a' href={`/post/${props.id}`}>
          {props.title}
        </CardTitle>
        <CardText>
          {props && props.isLink ? `${props.body}` : (props.body && props.body.length > 100 ? `${props.body.substring(0,100)}...` : `${props.body}`)}
        </CardText>
      </CardBody>
    </Card>
  )
}

export default Post
