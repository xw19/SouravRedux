const initialState = {
  fetching:  false,
  fetched: false,
  article: {},
  error: null,
}

const articleReducer = (state=initialState, action) => {
  switch (action.type) {
    case "FETCH_ARTICLE_PENDING":
      return {...initialState, fetching: true}
    case "FETCH_ARTICLE_FULFILLED":
      return {...initialState, fetching: false, fetched: true, article: action.payload.data, error: false}
    case "FETCH_ARTICLE_REJECTED":
      return {...initialState, fetching: false, fetched: false, error: true}
    default:
      return state
  }
}

export default articleReducer
