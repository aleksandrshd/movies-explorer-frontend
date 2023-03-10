import {useCallback, useEffect, useState} from "react";
import {Redirect, Route, Switch, useLocation} from 'react-router-dom';

import './App.css';

import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import Profile from "../Profile/Profile";
import Main from "../Main/Main";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {

  const [loggedIn, setLoggedIn] = useState(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const location = useLocation();

  const cbLogout = useCallback(() => {
    setLoggedIn(false);
  }, []);


  useEffect(() => {
    console.log(location.pathname);
    if ((location.pathname === "/main") ||
      (location.pathname === "/movies") ||
      (location.pathname === "/saved-movies") ||
      (location.pathname === "/profile")) {
      setIsHeaderVisible(true);
    }
    if ((location.pathname === "/main") ||
      (location.pathname === "/movies") ||
      (location.pathname === "/saved-movies")) {
      setIsFooterVisible(true);
    }
    ;

  }, [location]);


  return (
    <div className="App">
      {isHeaderVisible && <Header loggedIn={loggedIn}/>}
      <main>
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
      </main>
      {isFooterVisible && <Footer/>}
    </div>
  );
}

export default App;
