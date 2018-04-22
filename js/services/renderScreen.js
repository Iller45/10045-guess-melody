const appScreen = document.getElementsByClassName(`app`)[0];
const renderScreen = (el) => {
  appScreen.innerHTML = ``;
  appScreen.appendChild(el);
};
export {renderScreen};
