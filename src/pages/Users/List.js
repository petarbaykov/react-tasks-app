import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCard from '../../components/UserCard';

class List extends Component {

    delete = (e, ) => {

    }

    render() {
        return (
            <div>
                Users List
                {
                    this.props.users.map((user, i) => <UserCard user={user} key={i}/>)
                }
            </div>
        )
    }
}

export default connect(state => ({
    users: state.users.all.filter(t => t.id !== state.users.current.id)
}), null)(List);