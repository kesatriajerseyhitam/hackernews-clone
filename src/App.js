import React, { Suspense } from 'react';

import ErrorBoundary from './components/error-boundary'
import Footer from './components/footer';
import Navbar from './components/navbar'
import routes from './routes';

import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <ErrorBoundary>
        <Navbar />
        <Switch>
          <Suspense fallback={<div> Loading... </div>}>
            {
              routes.map((route, idx) => {
                return route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => (
                      <route.component {...props} />
                    )} />
                ) : (null);
              })
            }
          </Suspense>
        </Switch>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
