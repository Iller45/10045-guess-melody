const appScreen = document.getElementsByClassName(`main`)[0];
const createScreen = (str) => {
  appScreen.innerHTML = ``;
  appScreen.appendChild(str);
};
export {createScreen};
