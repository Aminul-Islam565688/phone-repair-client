import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import './App.css';
import Dashboard from './Components/Dashboard-Components/Dashboard/Dashboard';
import Home from './Components/Home-Components/Home/Home';
import Login from './Components/Login-Components/Login/Login';
import PrivateRoute from './Components/Login-Components/PrivateRoute/PrivateRoute';
import Payments from './Components/Payments/Payments';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/payments">
            <Payments></Payments>
          </Route>
          <PrivateRoute path="/serviceDetails/:serviceId">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
