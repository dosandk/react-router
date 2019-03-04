import * as React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import SignUp from '../pages/sign-up';
import Redirect from './index';

class Routes extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    const { path } = this.props.match;

    return (
      <Switch>
        <Route path={`${path}home`} component={Home} />
        <Route path={`${path}login`} component={Login} />
        <Route path={`${path}sign-up`} component={SignUp} />
        <Redirect to={path} />;
      </Switch>
    );
  }
}

export default withRouter(Routes);
