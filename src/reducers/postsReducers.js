const initialState = {
  fetching:  false,
  fetched: false,
  articles: [],
  error: null,
}

const postsReducer = (state=initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS_PENDING":
      return {...state, fetcing: true}
    case "FETCH_POSTS_FULFILLED":
      return {...state, fetching: false, fetched: true, articles: action.payload.data}
    case "FETCH_POSTS_REJECTED":
      return {...state, fetching: false, fetched: false, error: action.payload.data}
    default:
      return state
  }
}

export default postsReducer
