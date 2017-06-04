import React  from 'react'
import { fetchArticles } from '../actions'
import { Jumbotron, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Articles extends React.Component {
  componentDidMount() {
    console.log(this.props.auth_token)
    this.props.dispatch(fetchArticles())
  }

  render() {
    console.log(this.props)
    const articles = this.props.articles.map((article) => (
      <Row key={article.id}>
        <Col>
          <h2><Link to={`/article/${article.id}`}>{article.title}</Link></h2>
          <div>{article.body}</div>
        </Col>
      </Row>
    ))
    return(
      <div>
        <Jumbotron>
          <h1>Welcome to Sourav Moitra's Website</h1>
        </Jumbotron>
        <div>
          {articles}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return { articles: state.postsReducer.articles, fetched: state.postsReducer.fetched, auth_token: state.userReducer.authToken, isAuthenticated: state.userReducer.isAuthenticated }
}

export default connect(mapStateToProps)(Articles)
