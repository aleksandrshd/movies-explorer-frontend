import {Route, Routes} from 'react-router-dom';

import './App.css';

import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/sign-in" element={<Login />}/>
        <Route path="/sign-up">
          <Header loggedIn={false} />
          <Register />
        </Route>
        <Route exact path="/">
          <Header loggedIn={false} />
          <Promo />
          <NavTab />
          <AboutProject />
          <Techs />
          <AboutMe />
          <Footer />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
