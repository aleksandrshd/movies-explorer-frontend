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
    setTimeout(() => (isCooldown = false), 100);
  };
};
