import React from 'react';
import { 
  Route,
  Switch,
} from 'react-router-dom'
import Home from './Home'
import About from './About'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
    </Switch>
  );
}

export default Routes;