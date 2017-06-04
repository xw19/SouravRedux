import React from 'react'
import ReactDOM from 'react-dom'
import { registerUser } from '../actions'
import { connect } from 'react-redux'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

class Signup extends React.Component {

  submitAction(e) {
    e.preventDefault()
    console.log(this.props)
    const user = {
      email: ReactDOM.findDOMNode(this.refs.email).value,
      password: ReactDOM.findDOMNode(this.refs.password).value,
      password_confirmation: ReactDOM.findDOMNode(this.refs.password_confirmation).value
    }
    this.props.registerUser(user)
  }

  render() {

    return (
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <h1 className="text-center">Sign up</h1>
          <Form onSubmit={this.submitAction.bind(this)}>
            <FormGroup>
              <Label for="Email">Email</Label>
              <Input ref="email" type="email" name="email" id="Email" />
            </FormGroup>
            <FormGroup>
              <Label for="Password">Password</Label>
              <Input type="password" name="password" id="Password" ref="password"/>
            </FormGroup>
            <FormGroup>
              <Label for="PasswordConfirmation">Password confirmation</Label>
              <Input type="password" name="password_confirmation" id="PasswordConfirmation" ref="password_confirmation" />
            </FormGroup>

            <Button color="primary">Submit</Button>
          </Form>
        </Col>
      </Row>
    )
  }
}


export default connect(null, { registerUser })(Signup)
