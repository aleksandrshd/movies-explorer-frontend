import {ALL_MOVIES_KEY} from "./constants";

export const debounce = (size, setter, bigScreenParam, smallScreenParam) => {
  let isCooldown = false;

  return (e) => {
    if (isCooldown) return;
    if (e.target.innerWidth > size) {
      setter(bigScreenParam);
    } else if (smallScreenParam) {
      setter(smallScreenParam);
    }
    isCooldown = true;
    setTimeout(() => (isCooldown = false), 200);
  };
};

export const setDeviceTypeFn = (mobileRes, tabletRes, setter) => {
  let isCooldown = false;

  return (e) => {
    if (isCooldown) return;
    if (e.target.innerWidth < mobileRes) {
      setter('mobile');
    } else if ((e.target.innerWidth >= mobileRes) && (e.target.innerWidth < tabletRes)) {
      setter('tablet');
    } else if (e.target.innerWidth >= tabletRes) {
      setter('desktop');
    }
    isCooldown = true;
    setTimeout(() => (isCooldown = false), 200);
  };
};

export const getAllDefaultMovies = async (getMovies, setLoading) => {
  let allMovies = JSON.parse(localStorage.getItem(ALL_MOVIES_KEY));

  if (!allMovies) {
    if (setLoading) setLoading(true);

    const allMovies = await getMovies();
    console.log(allMovies);
    localStorage.setItem(ALL_MOVIES_KEY, JSON.stringify(allMovies));

    if (setLoading) setLoading(false);
  }

  return allMovies;
};

export const wordFilter = (word, movie) => {
  const {country, director, description, nameRU, nameEN} = movie;
  const search = new RegExp(word, 'i');
  return (
    search.test(country) ||
    search.test(director) ||
    search.test(description) ||
    search.test(nameRU) ||
    search.test(nameEN)
  );
};

export const shortFilter = (shortDuration, movie) => {
  return movie.duration < shortDuration;
};

export const convertDuration = (duration) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration - hours * 60;
  return {
    hours,
    minutes
  };
};
