import React from 'react'
import { ListGroupItem } from 'reactstrap'

const Comment = (props) => {
  console.log(props)
  return (
    <ListGroupItem>
      {props.body}
    </ListGroupItem>
  )
}

export default Comment
