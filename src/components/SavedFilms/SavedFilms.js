import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Movies from "../Movies/Movies";
import Footer from "../Footer/Footer";

export default function SavedFilms(loggedIn) {
  return (
    <>
      <Header loggedIn={loggedIn}/>
      <SearchForm/>
      <Movies/>
      {/*<Footer/>*/}
    </>
  );
}
