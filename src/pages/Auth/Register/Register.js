import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../../store/actions/users';
import { validateEmail } from '../../../utils';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Container from '../../../components/Container';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      error: '',
      message: ''
    }
  }

  onInputChange = e => {
    e.persist();
    this.setState({
      [e.target.name]: e.target.value,
      error: '',
      message: ''
    });
  }

  onSubmit = async e => {
    e.preventDefault();
    const { name, email, password } = this.state;
    const { error, message } = await this.props.register({ name, email, password });

    if (!error) {
      this.setState({ message });
      setTimeout(() => this.props.history.push('/'), 1000);
    }

    this.setState({ error });
  }

  render() {
    const disabled = !this.state.name || !this.state.email || !validateEmail(this.state.email) || !this.state.password;
    return (
      <Container>
        <h1>Register</h1>
        {this.state.error ? <div className="alert alert-danger">{this.state.error}</div> : ''}
        {this.state.message ? <div className="alert alert-success">{this.state.message}</div> : ''}
        <form onSubmit={this.onSubmit}>
          <Input
            label="Name"
            onChange={this.onInputChange}
            type="text"
            name="name"
            required
            className={this.state.error ? 'is-invalid' : ''}
          />
          <Input
            label="Email"
            onChange={this.onInputChange}
            type="email"
            name="email"
            required
            className={this.state.error ? 'is-invalid' : ''}
          />
          <Input
            label="Password"
            onChange={this.onInputChange}
            type="password"
            name="password"
            required
            className={this.state.error ? 'is-invalid' : ''}
          />
          <Button disabled={disabled} className="btn-primary btn-block">Register</Button>
          <Link to="/login">Already have an account?</Link>
        </form>
      </Container>
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