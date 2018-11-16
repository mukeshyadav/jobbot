import React from 'react'
import { ListGroupItem } from 'reactstrap'

const Comment = (props) => {
  return (
    <ListGroupItem>
      {props.body}
    </ListGroupItem>
  )
}

export default Comment
