const getMode = () => {
  const mode = localStorage.getItem("theme");
  if (mode) {
    return JSON.parse(mode);
  } else {
    return false;
  }
};

const saveMode = (mode) => {
  localStorage.setItem("theme", mode);
};

const setMode = (mode, setDarkMode) => {
  saveMode(mode);
  setDarkMode(mode);
};

export { getMode, setMode };
