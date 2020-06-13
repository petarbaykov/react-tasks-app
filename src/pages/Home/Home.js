import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../store/actions/users';

class Home extends Component {

    logout = () => {
        this.props.logout();
        this.props.history.push('/login');
    }
    render() {
        return (
            <div>
                <button onClick={this.logout}>Logout</button>
                <Link to="/tasks">Tasks</Link>
                <Link to="/tasks/create">Create task</Link>
            </div>
        )
    }
}

export default connect(null, dispatch => ({
    logout: () => dispatch(logout()),
}))(Home);