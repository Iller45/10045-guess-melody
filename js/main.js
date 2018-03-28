const appScreen = document.getElementsByClassName(`main`)[0];
const templatesHolder = document.getElementById(`templates`).content.children;
const appTemplates = [];
const KeyCode = {
  'ARROW__LEFT': 37,
  'ARROW__RIGHT': 39
};
const firstScreenIndex = 0;
const lastScreenIndex = templatesHolder.length - 1;
let currentScreen = 0;

const changeScreen = (e) => {
  if (e.altKey && e.keyCode === KeyCode.ARROW__LEFT) {
    currentScreen--;
    showScreen(currentScreen);
  } else if (e.altKey && e.keyCode === KeyCode.ARROW__RIGHT) {
    currentScreen++;
    showScreen(currentScreen);
  }
};

const showScreen = (num) => {
  appScreen.innerHTML = ``;
  if (num > appTemplates.length) {
    currentScreen = firstScreenIndex;
    appScreen.appendChild(appTemplates[currentScreen]);
  } else if (num < 0) {
    currentScreen = lastScreenIndex;
    appScreen.appendChild(appTemplates[currentScreen]);
  } else {
    appScreen.appendChild(appTemplates[num]);
  }
};

document.addEventListener(`keydown`, changeScreen);

[].forEach.call(templatesHolder, function (element) {
  appTemplates.push(element);
});

showScreen(currentScreen);
