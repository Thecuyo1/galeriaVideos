import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PaginaVideos from './PaginaVideos';
import VideoReproductor from './VideoReproduccion';
import Login from './Login';

export function App() {
  return (
    <React.Fragment>
      <Router>
        <div>
          <Switch>
           
            <Route path='/reproductor' >
              <VideoReproductor />
            </Route>
            <Route path='/principal' >
              <PaginaVideos />
            </Route>
            <Route path='/'>
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}
