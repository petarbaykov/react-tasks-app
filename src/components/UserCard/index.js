import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { remove } from '../../store/actions/users'
import Button from '../Button';

const UserCard = ({ user, removeUser})  => {
  const { name, email, password, role, id } = user;
  
  console.log("test");
  return (
    <div >
      <p>Name: {name}</p>
      <p>Email {email}</p>
      <p>Role {role}</p>
      <Button onClick={() => removeUser(id)}>Delete</Button>
      <Link to={{pathname: `/users/edit/${id}`}}> Edit </Link>
      <hr />
    </div>
  );
}

export default connect(null, dispatch => ({
  removeUser: id => dispatch(remove(id)),
}))(UserCard)