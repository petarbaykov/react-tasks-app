import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { remove } from '../../store/actions/tasks'
import Button from '../Button';
import Card from '../Layout/Card';

const TaskCard = ({ task, removeTask, history })  => {
  const { title, description, estimate, status, id } = task;
  return (
    <Card>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <p>Estimate {estimate}</p>
      <p>Status {status}</p>
      <Button className="btn-danger" onClick={() => removeTask(id)}>Delete</Button>
      <Link className="btn btn-success" to={{pathname: `/tasks/edit/${id}`}}>Edit</Link>
    </Card>
  );
}

export default connect(null, dispatch => ({
  removeTask: id => dispatch(remove(id)),
}))(TaskCard)