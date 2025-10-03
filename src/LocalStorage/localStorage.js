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

const setMode = (mode) => {
  saveMode(mode);
};

export { getMode, setMode };
