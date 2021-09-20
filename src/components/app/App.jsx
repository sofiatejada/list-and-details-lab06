import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HeyArnoldDetail from '../../containers/HeyArnoldDetail';
import HeyArnoldList from '../../containers/HeyArnoldList';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={HeyArnoldList} />
          <Route exact path="/:id" component={HeyArnoldDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
