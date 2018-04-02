const appScreen = document.getElementsByClassName(`main`)[0];
const renderScreen = (str) => {
  appScreen.innerHTML = ``;
  appScreen.appendChild(str);
};
export {renderScreen};
