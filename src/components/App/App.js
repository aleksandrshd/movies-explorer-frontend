import { useCallback, useEffect, useState } from "react";
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

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

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import * as api from "../../utils/MainApi";
import { getAllMovies } from '../../utils/MoviesApi';
import { CHANGE_USERDATA_ERROR_MESSAGE, LOAD_MOVIES_ERROR_MESSAGE } from "../../utils/constants";
import Preloader from "../Preloader/Preloader";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [tokenLoading, setTokenLoading] = useState(true);
  const [userData, setUserData] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const location = useLocation();
  const viewHeader = (location.pathname === "/main") ||
    (location.pathname === "/movies") ||
    (location.pathname === "/saved-movies") ||
    (location.pathname === "/profile");
  const viewFooter = (location.pathname === "/main") ||
    (location.pathname === "/movies") ||
    (location.pathname === "/saved-movies");

  const cbTokenCheck = useCallback(async () => {
    try {
      const jwt = localStorage.getItem('jwt');
      if (!jwt) {
        throw new Error('No token in storage');
      }
      const user = await api.checkToken(jwt);

      if (!user) {
        throw new Error('Invalid user');
      }

      setLoggedIn(true);
      setUserData(user);

    } catch {
    } finally {
      setTokenLoading(false);
    }
  }, []);

  const cbLogin = useCallback(async (name, email, password) => {
    try {
      setErrorMessage('');
      const data = await api.login(email, password);
      if (data.token) {
        setLoggedIn(true);
        localStorage.setItem('jwt', data.token);
        await cbTokenCheck();
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error);
    }
  }, [cbTokenCheck]);

  const cbRegister = useCallback(async (name, email, password) => {
    try {
      setErrorMessage('');
      const data = await api.register(name, email, password);
      if (data) {
        await cbLogin(name, email, password);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error);
    }
  }, [cbLogin]);

  const cbChangeUserData = useCallback(async (name, email) => {
    try {
      setErrorMessage('');
      const user = await api.changeUserData(name, email);
      setUserData(user);
    } catch (error) {
      console.log(error);
      setErrorMessage(CHANGE_USERDATA_ERROR_MESSAGE);
    }
  }, []);

  const cbGetDefaultMovies = useCallback(async () => {
    try {
      setErrorMessage('');
      return await getAllMovies();
    } catch (error) {
      console.log(error);
      setErrorMessage(LOAD_MOVIES_ERROR_MESSAGE);
    }
  }, []);

  const cbLogout = useCallback(() => {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    setUserData({});
  }, []);

  useEffect(() => {
    cbTokenCheck();
  }, [cbTokenCheck]);

  if (tokenLoading) {
    return <Preloader />;
  }

  return (

    <CurrentUserContext.Provider value={userData}>

      <div className="App">
        {viewHeader && <Header loggedIn={loggedIn}/>}
        <main>

          <Switch>

            <Route path="/sign-in">
              <AuthForm loggedIn={loggedIn}
                        isRegister={false}
                        errorMessage={errorMessage}
                        onSubmit={cbLogin}/>
            </Route>

            <Route path="/sign-up">
              <AuthForm loggedIn={loggedIn}
                        isRegister={true}
                        errorMessage={errorMessage}
                        onSubmit={cbRegister}/>
            </Route>

            <Route path="/main">
              <Main />
            </Route>

            <ProtectedRoute path="/movies"
                            loggedIn={loggedIn}
                            getDefaultMovies={cbGetDefaultMovies}
                            component={Movies}/>

            <ProtectedRoute path="/saved-movies"
                            loggedIn={loggedIn}
                            component={SavedMovies}/>

            <ProtectedRoute path="/profile"
                            loggedIn={loggedIn}
                            component={Profile}
                            errorMessage={errorMessage}
                            onSubmit={cbChangeUserData}
                            onLogout={cbLogout}/>

            <Route exact path="/">
              {loggedIn ? <Redirect to="/movies"/> : <Redirect to="/main"/>}
            </Route>

            <Route path="*">
              <PageNotFound/>
            </Route>

          </Switch>
        </main>
        {viewFooter && <Footer/>}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
