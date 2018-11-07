import React from 'react'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'

const Post = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag='a' href='/post/1/comment'>
          This is test Title
        </CardTitle>
        <CardText>
          This is test card body to show content on the page
        </CardText>
        <CardText>
          <small className='text-muted'>Date: 12/10/2018</small>
        </CardText>
      </CardBody>
    </Card>
  )
}

export default Post
