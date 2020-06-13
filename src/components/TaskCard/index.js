import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { remove } from '../../store/actions/tasks'
import Button from '../Button';

const TaskCard = ({ task, removeTask, history })  => {
  const { title, description, estimate, status, id } = task;
  console.log(removeTask);
  

  return (
    <div >
      <p>Title: {title}</p>
      <p>Description {description}</p>
      <p>Estimate {estimate}</p>
      <p>Status {status}</p>
      <Button onClick={() => removeTask(id)}>Delete</Button>
      <Link to={{pathname: `/tasks/edit/${id}`}}> Edit </Link>
      <hr />
    </div>
  );
}

export default connect(null, dispatch => ({
  removeTask: id => dispatch(remove(id)),
}))(TaskCard)