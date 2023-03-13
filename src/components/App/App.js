import {useCallback, useEffect, useState} from "react";
import {Redirect, Route, Switch, useLocation} from 'react-router-dom';

import './App.css';

import AuthForm from "../AuthForm/AuthForm";
import PageNotFound from "../PageNotFound/PageNotFound";
import Profile from "../Profile/Profile";
import Main from "../Main/Main";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import * as auth from "../../utils/MainApi";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [registrationSuccessful, setRegistrationSuccessful] = useState(false);
  const [userData, setUserData] = useState({});

  const location = useLocation();
  const viewHeader = (location.pathname === "/main") ||
    (location.pathname === "/movies") ||
    (location.pathname === "/saved-movies") ||
    (location.pathname === "/profile");
  const viewFooter = (location.pathname === "/main") ||
    (location.pathname === "/movies") ||
    (location.pathname === "/saved-movies");

  const cbRegister = useCallback(async (name, email, password) => {
    try {
      const data = await auth.register(name, email, password);
      if (data) {
        setRegistrationSuccessful(true);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const cbLogin = useCallback(async (name, email, password) => {
    try {
      const data = await auth.login(email, password);
      if (data.token) {
        setLoggedIn(true);
        localStorage.setItem('jwt', data.token);
        cbTokenCheck(); // для получения email пользователя
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const cbTokenCheck = useCallback(async () => {
    try {
      /*setAppLoading(true);*/
      const jwt = localStorage.getItem('jwt');
      if (!jwt) {
        throw new Error('No token in storage');
      }
      const user = await auth.checkToken(jwt);

      if (!user) {
        throw new Error('Invalid user');
      }

      setLoggedIn(true);
      console.log('user', user);
      setUserData(user);
      console.log('userData', userData);

    } catch {
    } finally {
      /*setAppLoading(false);*/
    }
  }, []);

  const cbLogout = useCallback(() => {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    setUserData({});
  }, []);

  useEffect(() => {
    cbTokenCheck();
  }, []);

  return (
    <div className="App">
      {viewHeader && <Header loggedIn={loggedIn}/>}
      <main>
        <Switch>
          <ProtectedRoute path="/main"
                          loggedIn={loggedIn}
                          component={Main}/>
          <Route path="/sign-in">
            <AuthForm loggedIn={loggedIn}
                      isRegister={false}
                      onSubmit={cbLogin}/>
          </Route>
          <Route path="/sign-up">
            <AuthForm loggedIn={loggedIn}
                      isRegister={true}
                      registrationSuccessful={registrationSuccessful}
                      onSubmit={cbRegister}/>
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
      {viewFooter && <Footer/>}
    </div>
  );
}

export default App;
