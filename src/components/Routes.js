import React from 'react'
import { Routes as Switch , Route, Navigate } from 'react-router-dom';

import { Results } from './Results';

export const Routes = () => {
  return (
    <div className="p-4">
    <Switch>
      {/* <Route exact path="/">
        <Navigate to="/search" />
      </Route> */}
      <Route exact path="/search" element={ <Results />}></Route>
      <Route path="/images" element={ <Results />}></Route>
      <Route path="/news" element={ <Results />}></Route>
      <Route path="/videos" element={ <Results />}></Route>
    </Switch>
  </div>
  )
};