import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, edit } from '../../store/actions/users';
import Input from '../../components/Input';
import Button from '../../components/Button';
      

class Create extends Component {

    constructor(props) {
        super(props);
        
        const { email, name, password, role, id } = props.users.find(t => t.id === props.match.params.id) || {};
        this.state = {
          name: name || '',
          email: email || '',
          password: password || '',
          role: role || 'user',
          isAdmin: role === 'admin',
          id
        }
      }
      onInputChange = e => {
        e.persist();
        this.setState({
          [e.target.name]: e.target.value,
        });
      }
      
      userAction = async () => {
        const { name, email, password, id, isAdmin } = this.state;
        const method = id ? "editUser" : "addUser";
        return this.props[method]({ name, email, password, id, role: isAdmin ? 'admin' : 'user' });
      }

      onSubmit = async e => {
        e.preventDefault();
        
        const { error, message } = await this.userAction();
        if (!error) {
          return this.props.history.push('/users');
        }
      }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <Input
                        type="text"
                        label="Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.onInputChange} />
                    <Input
                        type="email"
                        label="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onInputChange} />
                    <Input
                        type="password"
                        label="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onInputChange} />
                    <Input
                        type="checkbox"
                        label="Admin ?"
                        name="isAdmin"
                        checked={this.state.isAdmin}
                        value={this.state.isAdmin}
                        onChange={() => this.setState({ isAdmin: !this.state.isAdmin})} />
                    <Button>Save</Button>
                </form>
            </div>
        )
    }
}

export default connect(state => ({
    users: state.users.all
}), dispatch => ({
    addUser: task => dispatch(add(task)),
    editUser: task => dispatch(edit(task)),
}))(Create);