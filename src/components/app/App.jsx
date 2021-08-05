import React from 'react';
import { Switch, Route } from 'react-router-dom';
import VillagerList from '../Villagers/VillagerList';
import VillagerDetails from '../VillagerDetail/VillagerDetail';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={VillagerList} />
      <Route exact path="/:id" component={VillagerDetails} />
    </Switch>
  );
}
