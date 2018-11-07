const API = '//localhost:3000'
const postLimit = 10
const commentLimit = 3

const getPosts = (params) => {
  const page = params && params.page ? params.page : 1
  return fetch(`${API}/posts?_page=${page}&_limit=${postLimit}`)
    .then(response => response.json())
    .then(responseJSON => responseJSON)
}

const getComments = () => {
  return fetch(`${API}/comments`)
    .then(response => response.json())
    .then(responseJSON => responseJSON)
}

const addComment = () => {
  return fetch(`${API}/posts`)
    .then(response => response.json())
    .then(responseJSON => responseJSON)
}

export { getPosts, getComments, addComment }
