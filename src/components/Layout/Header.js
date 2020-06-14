import React,  { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/users';

class Header extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            logout: false,
        }
    }

    logout = e => {
        e.preventDefault();
        this.props.logout();
        setTimeout(() => this.setState({ logout: true }));
    }

    render() {
        if (this.state.logout) {
            return <Redirect to='/'/>;
        }
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/tasks" className="nav-link">Tasks</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/tasks/create" className="nav-link">Create task</Link>
                            </li>
                            
                        </ul>
                        {
                            this.props.user.role === "admin" ? 
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/users" className="nav-link">Users</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/users/create" className="nav-link">Create user</Link>
                                </li>
                            </ul>
                            : ""
                        }
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="#" onClick={this.logout} className="nav-link">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
    
}

export default connect(
    state => ({ user: state.users.current }),
    dispatch => ({ 
        logout: () => dispatch(logout())
    })
)(Header);