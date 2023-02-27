import {useCallback, useState} from "react";
import {Redirect, Route, Switch} from 'react-router-dom';

import './App.css';

import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import Profile from "../Profile/Profile";
import Landing from "../Landing/Landing";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Films from "../Films/Films";
import SavedFilms from "../SavedFilms/SavedFilms";

function App() {

  const [loggedIn, setLoggedIn] = useState(true);

  const cbLogout = useCallback(() => {
    setLoggedIn(false);
  }, []);

  return (
    <div className="App">
      <Switch>
        <ProtectedRoute path="/landing"
                        loggedIn={loggedIn}
                        component={Landing}/>
        <Route path="/sign-in">
          <Login/>
        </Route>
        <Route path="/sign-up">
          <Register/>
        </Route>
        <ProtectedRoute path="/movies"
                        loggedIn={loggedIn}
                        component={Films}/>
        <ProtectedRoute path="/saved-movies"
                        loggedIn={loggedIn}
                        component={SavedFilms}/>
        <ProtectedRoute path="/profile"
                        loggedIn={loggedIn}
                        component={Profile}
                        onLogout={cbLogout}/>
        <Route exact path="/">
          {loggedIn ? <Redirect to="/landing"/> : <Redirect to="/sign-in"/>}
        </Route>
        <Route path="*">
          <PageNotFound/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
