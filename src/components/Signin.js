import React from 'react'
import { authenticateUser } from '../actions'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

class Signin extends React.Component {
  submitAction(e) {
    e.preventDefault()
    console.log(this.props)
    const user = {
      email: ReactDOM.findDOMNode(this.refs.email).value,
      password: ReactDOM.findDOMNode(this.refs.password).value,
    }
    this.props.authenticateUser(user)
  }

  render() {
    if (this.props.isAuthenticated) {
      return(<h2>You are successfully authenticated</h2>)
    }
    return (
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <h1 className="text-center">Sign in</h1>
          <Form onSubmit={this.submitAction.bind(this)} >
            <FormGroup>
              <Label for="Email">Email</Label>
              <Input type="email" name="email" id="Email" ref='email'/>
            </FormGroup>
            <FormGroup>
              <Label for="Password">Password</Label>
              <Input type="password" name="password" id="Password" ref='password'/>
            </FormGroup>

            <Button color="primary">Submit</Button>
          </Form>
        </Col>
      </Row>
    )
  }
}
function mapStateToProps(state) {
  return { isAuthenticated: state.userReducer.isAuthenticated }
}

export default connect(mapStateToProps, { authenticateUser })(Signin)
