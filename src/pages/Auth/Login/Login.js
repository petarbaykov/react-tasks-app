import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../store/actions/users';
import Input from '../../../components/Input';
import Button from '../../../components/Button';


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
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
    const { email, password } = this.state;
    const { error, message } = await this.props.login({ email, password });
    if (!error) {
      return this.props.history.push('/');
    }
  }


  render() {
    return (
        <form onSubmit={this.onSubmit}>
            <Input
                type="email"
                label="Email"
                onChange={this.onInputChange}
                name="email"
            />
            <Input
                type="password"
                label="Password"
                onChange={this.onInputChange}
                name="password"
            />
            <Button>
              Login
            </Button>
        </form>
    );
  }
}

export default connect(
  null, 
  dispatch => ({
    login: user => dispatch(login(user)),
  })
)(Login)