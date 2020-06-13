import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add } from '../../store/actions/tasks';
import Input from '../../components/Input';
import Button from '../../components/Button';

class Create extends Component {

    constructor(props) {
        super(props);
        this.state = {
          title: '',
          description: '',
          estimate: 0
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
        const { title, description, estimate } = this.state;
        const { error, message } = await this.props.addTask({ title, description, estimate });
        if (!error) {
          return this.props.history.push('/tasks');
        }
      }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <Input
                        type="text"
                        label="Title"
                        name="title"
                        onChange={this.onInputChange} />
                    <Input
                        type="text"
                        label="Description"
                        name="description"
                        onChange={this.onInputChange} />
                    <Input
                        type="number"
                        label="Estimate"
                        name="estimate"
                        onChange={this.onInputChange} />

                    <Button>Save</Button>
                </form>
            </div>
        )
    }
}

export default connect(null, dispatch => ({
    addTask: task => dispatch(add(task)),
}))(Create);