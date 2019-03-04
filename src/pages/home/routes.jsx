import * as React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Foo from './foo';
import Bar from './bar';

export class Routes extends React.Component {

  render () {
    const { path } = this.props.match;

    return (
      <Switch>
        <Route path={`${path}/foo`} component={Foo} />
        <Route path={`${path}/bar`} component={Bar} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
