import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, edit } from '../../store/actions/tasks';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Content from '../../components/Layout/Content';

class Create extends Component {

    constructor(props) {
        super(props);
        const { title, description, estimate, id } = props.tasks.find(t => t.id === props.match.params.id) || {};
        this.state = {
          title: title || '',
          description: description || '',
          estimate: estimate || 0,
          id
        }
      }
      onInputChange = e => {
        e.persist();
        this.setState({
          [e.target.name]: e.target.value,
        });
      }
      
      taskAction = async () => {
        const { title, description, estimate, id } = this.state;
        const method = id ? "editTask" : "addTask";
        return this.props[method]({ title, description, estimate, id });
      }

      onSubmit = async e => {
        e.preventDefault();
        const { error, message } = await this.taskAction();
        if (!error) {
          return this.props.history.push('/tasks');
        }
      }

    render() {
        const disabled = !this.state.title || !this.state.description || !this.state.estimate;
        return (
            <Content>
                <form onSubmit={this.onSubmit}>
                    <Input
                        type="text"
                        label="Title"
                        name="title"
                        value={this.state.title}
                        onChange={this.onInputChange} />
                    <Input
                        type="text"
                        label="Description"
                        name="description"
                        value={this.state.description}
                        onChange={this.onInputChange} />
                    <Input
                        type="number"
                        label="Estimate"
                        name="estimate"
                        value={this.state.estimate}
                        onChange={this.onInputChange} />

                    <Button disabled={disabled} className="btn-success btn-block">Save</Button>
                </form>
            </Content>
        )
    }
}

export default connect(
  state => ({ tasks: state.tasks.list}), 
  dispatch => ({
    addTask: task => dispatch(add(task)),
    editTask: task => dispatch(edit(task)),
  })
)(Create);