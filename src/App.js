import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Container } from 'reactstrap'
import { JobBotProvider } from './store.js'
import Header from './components/Header/'
import Loader from './components/Loader'
import Posts from './containers/Posts'
import Comments from './containers/Comments'

class App extends Component {

  render () {
    return (
      <JobBotProvider>
        <Router path='/' component={App} basename='/'>
          <React.Fragment>
            <Header />
            <Loader />
            <Container>
              <Route exact path='/' component={Posts} />
              <Route path='/post/:id' component={Comments} />
            </Container>
          </React.Fragment>
        </Router>
      </JobBotProvider>
    )
  }
}

export default App
