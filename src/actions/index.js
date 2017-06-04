import axios from 'axios'

export function fetchArticles(auth_token) {
  return (dispatch) => {
    dispatch({
      type: "FETCH_POSTS",
      payload: axios.get("http://localhost:3000/articles.json")
    })
  }
}

export function fetchArticle(id, auth_token) {
  return (dispatch) => {
    dispatch({
      type: "FETCH_ARTICLE",
      payload: axios.get("http://localhost:3000/articles/" + id + ".json", { headers: { Authorization: auth_token } })
    })
  }
}

export function registerUser(user) {
  console.log(user)
  return (dispatch) => {
    dispatch({
      type: "REGISTER_USER",
      payload: axios.post("http://localhost:3000/createuser/", user)
    })
  }
}

export function authenticateUser(user) {
  console.log(user)
  return (dispatch) => {
    dispatch({
      type: "AUTH_USER",
      payload: axios.post("http://localhost:3000/authenticate/", user)
    })
  }
}
