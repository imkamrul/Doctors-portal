import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import LogIn from './Pages/LogIn/LogIn';
import Register from './Pages/LogIn/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
