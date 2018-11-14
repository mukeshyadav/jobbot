const API = '//localhost:3000'
const postLimit = 10
const commentLimit = 3

const getPosts = (params) => {
  const page = params && params.page ? params.page : 1
  return fetch(`${API}/posts?_page=${page}&_limit=${postLimit}`)
    .then(response => response.json())
    .then(responseJSON => responseJSON)
}

const getComments = (params) => {
  const {id, page} = params ? params : {id: 1, page: 1}
  return fetch(`${API}/posts/${id}/comments?_page=${page}&_limit=${commentLimit}`)
    .then(response => response.json())
    .then(responseJSON => responseJSON)
}

const addComment = () => {
  return fetch(`${API}/posts`)
    .then(response => response.json())
    .then(responseJSON => responseJSON)
}

const getArrayData = (arr, obj) => {
  for (let key in obj) {
    arr.push(obj[key])
  }
  return arr
}

export { getPosts, getComments, addComment, getArrayData }
