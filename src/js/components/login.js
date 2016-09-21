import React, { Component } from 'react'
import { withRouter } from 'react-router'
import {
  checkFromPassword, checkFromStorage
} from '../utils/authentication'

class Login extends Component {
  constructor(props) {
    super(props)
    const { location, router } = this.props
    
    this.state = { user: '', password: '', error: false }

    const updateRoute = () => 
      router.replace(
        (location.state && location.state.nextPathname) ?
        location.state.nextPathname : '/')
    
    checkFromStorage().then(updateRoute)
    
    //TODO handle errors
    this.handleSubmit = () =>   
      checkFromPassword(this.refs.user.value, this.refs.password.value)
        .then(updateRoute)
    
  }
  
  render() {
    return (
      <div className="container">
        <form className="form-signin">
        <h2 className="form-signin-heading">Please sign in</h2>
        {/* { this.state.error && 
          <div className="alert alert-danger" role="alert">
            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            <span className="sr-only">Error:</span>
            Enter a valid email address
          </div>
        } */}
        <label htmlFor="username" className="sr-only">User name</label>
        <input type="text" id="username" className="form-control"
               placeholder="Username" required ref="user" />
        <label htmlFor="password" className="sr-only">Password</label>
        <input type="password" id="password" className="form-control"
               placeholder="Password" required="" ref="password" />
        <button className="btn btn-lg btn-primary btn-block" type="submit"
                onClick={e => { e.preventDefault();this.handleSubmit() }}>
          Sign in 
        </button>
        
        </form>
      </div>
    )
  }
}
export default withRouter(Login)