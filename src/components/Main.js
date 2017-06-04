import React  from 'react'
import { Container } from 'reactstrap'
import { Switch, Route } from 'react-router-dom'
import Articles from './Articles'
import About from './About'
import Article from './Article'
import Signin from './Signin'
import Signup from './Signup'

class Main extends React.Component {

  render() {
    return(
      <Container fluid>
        <Switch>
          <Route exact path='/' component={Articles}/>
          <Route path='/article/:id' component={Article} />
          <Route path='/signin' component={Signin} />
          <Route path='/signup' component={Signup} />
          <Route path='/about' component={About}/>
        </Switch>
      </Container>
    )
  }
}


export default Main
