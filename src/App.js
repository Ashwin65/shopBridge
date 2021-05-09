import React, { lazy, Suspense } from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import {
  Link, Route, Router, Switch
} from 'react-router-dom';
import history from './Routes/history';

const AdminPortal = lazy(() => import('./Admin/index'));
const NotFound = lazy (()=> import('./Routes/NotFound'))



function App() {
  return (
    <ErrorBoundary>
      <Router history = {history}>
      <>
            <Link to="/" className={AdminPortal} />
          </>
    <Suspense fallback={<div>Loading...</div>}>
    <Switch>
    <Route exact path="/" component={AdminPortal}  />
      <Route path="*" component={NotFound} />
    </Switch>
  </Suspense>
  </Router>
  </ErrorBoundary>


  
  );
}

export default App;
