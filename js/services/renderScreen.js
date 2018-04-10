const appScreen = document.getElementsByClassName(`main`)[0];
const renderScreen = (el) => {
  console.log(el);
  appScreen.innerHTML = ``;
  appScreen.appendChild(el);
};
export {renderScreen};
