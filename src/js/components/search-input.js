import React, { Component } from 'react'
import { sparqlConnect } from '../sparql/configure-sparql'
import { LOADING, LOADED, FAILED } from 'sparql-connect'
import { browserHistory } from 'react-router'
import { uriToLink } from '../router-mapping'
import { connect } from 'react-redux'

export default class SearchInput extends Component {

  constructor(props) {
    super(props)
    this.handleSubmit = () => {
      const forCode = this.refs.searchForCode.checked
      browserHistory.push(uriToLink.searchItems(this.refs.search.value.trim(), forCode))
    }
    this.handleKeyDown = e => {
      if (e.keyCode === 13) this.handleSubmit()
    }
  }

  render() {
    return (
      <form className="navbar-form navbar-right" role="search">
        <div className="form-group" style={{ marginRight: 10}}>
          <label className="radio-inline">Search for</label>
          <label className="radio-inline">
            <input type="radio" 
                   name="searchtype" value="text" defaultChecked />
            text
          </label>
          <label className="radio-inline">
            <input type="radio" ref="searchForCode"
                   name="searchtype" value="code" />
            code
          </label>
        </div>
        <div className="form-group">
          <div className="input-group">
            <input type="text" className="form-control"
              placeholder="Enter a keyword" ref="search"
              onKeyDown={this.handleKeyDown}/>
              <div className="input-group-btn">
                   <button className="btn btn-default" type="submit"
                      onClick={ e => { e.preventDefault();this.handleSubmit()}}>
                     <i className="glyphicon glyphicon-search"></i>
                   </button>
               </div>
            </div>
          </div>
      </form>
//       <div className="col-sm-3 col-md-3">
//         <form className="navbar-form" role="search">


//           </div>
//         </form>
//         <form className="navbar-form navbar-right" role="search">

// </form>
//     </div>
      // <span>
      //   Search everything :
      //   <input className="search" type="search" placeholder="Enter a keyword"
      //          ref="search" onKeyDown={this.handleKeyDown} />
      //   <button onClick={this.handleSubmit}>
      //     OK
      //   </button>
      //   <label><input type="checkbox" ref="searchForCode"/>Search for codes only</label>
      // </span>
    )
  }
}
