import {useCallback, useState} from "react";
import {Redirect, Route, Switch} from 'react-router-dom';

import './App.css';

import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import Profile from "../Profile/Profile";
import Main from "../Main/Main";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";

function App() {

  const [loggedIn, setLoggedIn] = useState(true);

  const cbLogout = useCallback(() => {
    setLoggedIn(false);
  }, []);

  return (
    <div className="App">
      <Switch>
        <ProtectedRoute path="/main"
                        loggedIn={loggedIn}
                        component={Main}/>
        <Route path="/sign-in">
          <Login/>
        </Route>
        <Route path="/sign-up">
          <Register/>
        </Route>
        <ProtectedRoute path="/movies"
                        loggedIn={loggedIn}
                        component={Movies}/>
        <ProtectedRoute path="/saved-movies"
                        loggedIn={loggedIn}
                        component={SavedMovies}/>
        <ProtectedRoute path="/profile"
                        loggedIn={loggedIn}
                        component={Profile}
                        onLogout={cbLogout}/>
        <Route exact path="/">
          {loggedIn ? <Redirect to="/main"/> : <Redirect to="/sign-in"/>}
        </Route>
        <Route path="*">
          <PageNotFound/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
