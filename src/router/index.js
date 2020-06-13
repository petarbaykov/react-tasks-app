import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { isEmpty } from 'lodash';
import { getState } from '../store';
import Login from '../pages/Auth/Login/Login';
import Register from '../pages/Auth/Register/Register';
import Home from '../pages/Home/Home';
import TasksList from '../pages/Tasks/List';
import TaskCreate from '../pages/Tasks/Create';

const render = ({routeProps, Component, noAuth}) => {
  const { users = {} } = getState();
  if (isEmpty(users.current) && !noAuth) return <Redirect to="/login" />
  if (!isEmpty(users.current) && noAuth) return <Redirect to="/" />
  return <Component {...routeProps} />
}

const AppRoute = ({ component: Component, noAuth, ...rest }) => <Route {...rest} render={(routeProps) => render({routeProps, Component, noAuth})} />

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AppRoute exact path="/login" noAuth component={Login}/>
        <AppRoute exact path="/register" noAuth component={Register} />
        <AppRoute exact path="/" component={Home} />
        <AppRoute exact path="/tasks" component={TasksList} />
        <AppRoute exact path="/tasks/create" component={TaskCreate} />
        <AppRoute exact path="/tasks/edit/:id" component={TaskCreate} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;