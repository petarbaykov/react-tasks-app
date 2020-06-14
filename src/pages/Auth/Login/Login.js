import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../../store/actions/users';
import { validateEmail } from '../../../utils';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Container from '../../../components/Container';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
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
    const { email, password } = this.state;
    const { error, message } = await this.props.login({ email, password });
    
    if (!error) {
      this.setState({ message });
      setTimeout(() => this.props.history.push('/'), 1000);
      return;
    }

    this.setState({ error });
  }


  render() {
    const disabled = !this.state.email || !validateEmail(this.state.email) || !this.state.password;
    return (
      <Container>
        <h1>Login</h1>
        <form onSubmit={this.onSubmit}>
        {this.state.error ? <div className="alert alert-danger">{this.state.error}</div> : ''}
        {this.state.message ? <div className="alert alert-success">{this.state.message}</div> : ''}
            <Input
                type="email"
                label="Email"
                onChange={this.onInputChange}
                name="email"
                className={this.state.error ? 'is-invalid' : ''}
            />
            <Input
                type="password"
                label="Password"
                onChange={this.onInputChange}
                name="password"
                className={this.state.error ? 'is-invalid' : ''}
            />
            <Button disabled={disabled} className="btn-primary btn-block">
              Login
            </Button>
            <Link to="/register">Don't have account?</Link>
        </form>
      </Container>
    );
  }
}

export default connect(
  null, 
  dispatch => ({
    login: user => dispatch(login(user)),
  })
)(Login)