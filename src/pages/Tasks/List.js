import React, { Component } from 'react';
import { connect } from 'react-redux';

class List extends Component {

    render() {
        console.log(this.props.tasks);
        return (
            <div>
                Tasks List
                {
                    this.props.tasks.map((task, i) => (
                        <div key={i}>
                            {task.title}
                            {task.description}
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default connect(state => ({
    tasks: state.tasks.list
}), null)(List);