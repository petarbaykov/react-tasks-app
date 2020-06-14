import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { remove } from '../../store/actions/users'
import Button from '../Button';
import Card from '../Layout/Card'

const UserCard = ({ user, removeUser})  => {
  const { name, email, role, id } = user;
  return (
    <Card >
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Role: {role}</p>
      <Button className="btn-danger" onClick={() => removeUser(id)}>Delete</Button>
      <Link className="btn btn-success" to={{pathname: `/users/edit/${id}`}}> Edit </Link>
    </Card>
  );
}

export default connect(null, dispatch => ({
  removeUser: id => dispatch(remove(id)),
}))(UserCard)