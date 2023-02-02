import './App.css';

import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";

function App() {
  return (
    <div className="App">
      {/*<Header />
      <SearchForm />
      <Movies />
      <Footer />*/}
      <Promo />
      <NavTab />
      <AboutProject />
    </div>
  );
}

export default App;
