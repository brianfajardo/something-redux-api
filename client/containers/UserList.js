import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions'
import * as styles from '../../styles/styles'

class UserList extends Component {
  // Load initial dummy data on mount and re-render
  componentWillMount() {
    this.props.fetchUsers()
  }

  renderUser(user) {
    return (
      <div
        className="card text-center"
        style={styles.card}
        key={user.id}
      >
        <div className="card-block">
          <h4 className="card-title">{user.name}</h4>
          <p className="card-text">{user.address.city}</p>
          <p className="card-text">{user.phone}</p>
          <a
            className="btn btn-danger btn-sm"
            href={user.email}
          >
            {user.email}
          </a>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div
        className="user-list"
        style={styles.userList}
      >
        {this.props.users.map(this.renderUser)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps, actions)(UserList)