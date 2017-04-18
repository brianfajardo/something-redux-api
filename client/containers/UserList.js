import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions'

class UserList extends Component {
  // Load initial dummy data on mount and
  // re-render
  componentWillMount() {
    this.props.fetchUsers()
  }

  renderUser(user) {
    return (
      <div className="card card-block">
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">Twitch.tv</p>
        <a className="btn btn-info btn-sm">Email</a>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.props.users.map(this.renderUser)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps, actions)(UserList)