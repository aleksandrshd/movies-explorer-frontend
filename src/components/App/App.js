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

function App() {
  return (
    <div className="App">
      {/*<Header />
      <SearchForm />
      <Movies />
      <Footer />*/}
      {/*<Promo />*/}
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
    </div>
  );
}

export default App;
