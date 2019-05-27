import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from './_routes'

const routeList = routes.map((route, index) =>  (
  <Route key={index} path={route.path} component={route.component} exact={route.exact} />
))

export const Routes = () => {
  return (
    <Switch>
      { routeList }
    </Switch>
  )
}