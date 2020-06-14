import React from 'react';
import { connect } from 'react-redux';
import Content from '../../components/Layout/Content';
import TaskCard from '../../components/TaskCard';

const List = props => {
    return (
        <Content className="card-columns">
            { props.tasks.map((task, i) => <TaskCard task={task} key={i}/>) }
        </Content>
    )
}

export default connect(
    state => ({
        tasks: state.tasks.list.filter(t => state.users.current.role === 'user' ? t.user_id === state.users.current.id : t)
    }), 
    null
)(List);