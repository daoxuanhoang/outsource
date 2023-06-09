import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routers } from './utils'
import { IRoute } from './types/app';


function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          {showContentMenu(routers)}
        </Switch>
      </div>
    </Router>
  );
}

const showContentMenu = (routers: any) => {
  var result = null;

  if (routers) {
    result = routers.map((route: IRoute, index: number) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      );
    });
  }

  return result;
}
}

export default App;
