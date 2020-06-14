import React from 'react';
import { connect } from 'react-redux';
import UserCard from '../../components/UserCard';
import Content from '../../components/Layout/Content';

const List = props => {
    return (
        <Content className="card-columns">
            { props.users.map((user, i) => <UserCard user={user} key={i}/>) }
        </Content>
    )
}

export default connect(
    state => ({ users: state.users.all.filter(t => t.id !== state.users.current.id)}),
    null
)(List);