import * as React from 'react';
import { Link } from 'react-router-dom';
import Routes from './routes';

const Home = ({ match }) => {
  const { path } = match;

  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to={`${path}/foo`}>foo</Link>
        </li>
        <li>
          <Link to={`${path}/bar`}>bar</Link>
        </li>
      </ul>
      <Routes />
    </div>
  );
};

export default Home;
