import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { connect } from 'react-redux';
import { register } from '../../../store/actions/users';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      errorMessage: ''
    }
  }

  onInputChange = e => {
    e.persist();
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
      errorMessage: ''
    });
  }

  onSubmit = async e => {
    e.preventDefault();
    const { name, email, password } = this.state;
    const { error, message } = await this.props.register({ name, email, password });
    console.log(this.props);
    if (!error) {
      this.props.history.push('/');
    }
  }

  render() {
    const disabled = !this.state.name || !this.state.email || !this.state.password;
    return (
      <form onSubmit={this.onSubmit}>
        <Input
          label="Name"
          onChange={this.onInputChange}
          type="text"
          name="name"
          required
        />
        <Input
          label="Email"
          onChange={this.onInputChange}
          type="email"
          name="email"
          required
        />
        <Input
          label="Password"
          onChange={this.onInputChange}
          type="password"
          name="password"
          required
        />
        <Button disabled={disabled}>Register</Button>
        <Link to="/login">Already have an account?</Link>
      </form>
    )
  }
}

export default connect(
  state => ({
    users: state.users.all
  }), 
  dispatch => ({
    register: user => dispatch(register(user)),
  })
)(Register)