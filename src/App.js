import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUserDataProfile } from './redux/actions/profile.actions';

import Layout from './layout';
import Sidebar from './components/Sidebar';
import routes from './routes';

import './App.css';
import { loadCategories } from './redux/actions/categories.actions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDataProfile());
    dispatch(loadCategories());
  }, []);
  return (
    <Router>
      <Layout
        sidebar={<Sidebar />}
        pages={
          <Switch>
            {
              routes.map(route => (
                <Route
                  exact={route.exact}
                  key={route.toString()}
                  path={route.path}
                >
                  {route.component}
                </Route>
              ))
            }
          </Switch>
        }
      />
    </Router>
  );
};

export default App;
