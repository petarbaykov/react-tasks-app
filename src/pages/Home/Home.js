import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/users';
import Content from '../../components/Layout/Content';

class Home extends Component {

    logout = () => {
        this.props.logout();
        this.props.history.push('/login');
    }
    render() {
        return (
            <Content>
                <button onClick={this.logout}>Logout</button>
                Welcome
            </Content>
        )
    }
}

export default connect(null, dispatch => ({
    logout: () => dispatch(logout()),
}))(Home);