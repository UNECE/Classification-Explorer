import React, { Component } from 'react'
import { withRouter } from 'react-router'
import {
  checkFromPassword, checkFromStorage
} from '../utils/authentication'

class Login extends Component {
  constructor(props) {
    super(props)
    const { location, router } = this.props
    this.state = { user: '', password: '', loggedIn: false }

    const updateRoute = () => 
      router.replace(
        (location.state && location.state.nextPathname) ?
        location.state.nextPathname : '/')
    
    checkFromStorage().then(updateRoute)
    
    this.handleSubmit = () =>   
      checkFromPassword(this.refs.user.value, this.refs.password.value)
        .then(updateRoute)
  }
  
  render() {
    return (
      <div>
        <input type="text" placeholder="username" ref="user"/>
        <input type="password" placeholder="password" ref="password"/>
        <button onClick={this.handleSubmit}>Login</button>
      </div>
    )
  }
}
export default withRouter(Login)