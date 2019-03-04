import * as React from 'react';
import { Link } from 'react-router-dom';
import Routes from './routes';

class Layout extends React.Component {

  render () {
    const { path } = this.props.match;

    return (
      <main>
        <ul>
          <li>
            <Link to={`${path}home`}>home</Link>
          </li>
          <li>
            <Link to={`${path}login`}>login</Link>
          </li>
          <li>
            <Link to={`${path}sign-up`}>sign-up</Link>
          </li>
        </ul>

        <Routes />
      </main>
    );
  }
}

export default Layout;
