import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskCard from '../../components/TaskCard';

class List extends Component {

    delete = (e, ) => {

    }

    render() {
        console.log(this.props.tasks);
        return (
            <div>
                Tasks List
                {
                    this.props.tasks.map((task, i) => <TaskCard task={task} key={i}/>)
                }
            </div>
        )
    }
}

export default connect(state => ({
    tasks: state.tasks.list
}), null)(List);