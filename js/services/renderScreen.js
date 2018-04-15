const appScreen = document.getElementsByClassName(`main`)[0];
const renderScreen = (el) => {
  appScreen.innerHTML = ``;
  appScreen.appendChild(el);
};
export {renderScreen};
