const initialState = {
  fetching:  false,
  fetched: false,
  isAuthenticated: false,
  authToken: null,
  error: null,
}

const userReducer = (state=initialState, action) => {
  switch (action.type) {
    case "REGISTER_USERS_PENDING":
      return {...state, fetcing: true}
    case "REGISTER_USERS_FULFILLED":
      return {...state, fetching: false, fetched: true }
    case "REGISTER_USERS_REJECTED":
      return {...state, fetching: false, fetched: false, error: action.payload.data}
    case "AUTH_USERS_PENDING":
      return {...state, fetcing: true}
    case "AUTH_USER_FULFILLED":
      return {...state, fetching: false, fetched: true, isAuthenticated: true, authToken: action.payload.data.auth_token }
    case "AUTH_USERS_REJECTED":
      return {...state, fetching: false, fetched: false, error: action.payload.data}
    default:
      return state
  }
}

export default userReducer
