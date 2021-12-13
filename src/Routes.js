import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Page/Home/Home';
import About from './Page/About/About';
import Work from './Page/Work/Work';
import Contact from './Page/Contact/Contact';
import NotFound from './Page/page404';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/work" exact component={Work} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
