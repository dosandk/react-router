import * as React from 'react';
import { render } from 'react-dom';
import { Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Layout from './layout';

const App = () => {
  return (
    <Router history={createBrowserHistory()}>
      <Route path="/" component={Layout} />
    </Router>
  )
};

const appContainer = document.getElementById('app');
const renderApp = () => render(<App />, appContainer);

renderApp();
