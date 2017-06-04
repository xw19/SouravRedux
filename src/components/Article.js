import React  from 'react'
import { fetchArticle } from '../actions'
import { connect } from 'react-redux'

class Article extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchArticle(this.props.match.params.id, this.props.auth_token))
  }

  render() {
    console.log(this.props)
    const article = this.props.article
    if (this.props.error && !this.props.isAuthenticated) {
      return(<h3>Please Login</h3>)
    } else if (this.props.error && this.props.isAuthenticated) {
      return(<h3>Some error occured</h3>)
    }

    if (this.props.fetched && !this.props.fetching && this.props.article) {
      return(
        <div>
          <h1>{article.title}</h1>
          <div>
            {article.body}
          </div>
        </div>
      )
    }

    return(
      <h1>Loading...</h1>
    )
  }
}

function mapStateToProps(state) {
  return { article: state.articleReducer.article, fetched: state.articleReducer.fetched, fetching: state.articleReducer.fetching, error: state.articleReducer.error, auth_token: state.userReducer.authToken, isAuthenticated: state.userReducer.isAuthenticated }
}

export default connect(mapStateToProps)(Article)
