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

[].forEach.call(templatesHolder, function (el) {
  appTemplates.push(el);
});

const showScreen = (num) => {
  appScreen.innerHTML = ``;
  if (num >= appTemplates.length) {
    currentScreen = firstScreenIndex;
    appScreen.appendChild(appTemplates[currentScreen]);
  } else if (num < 0) {
    currentScreen = lastScreenIndex;
    appScreen.appendChild(appTemplates[currentScreen]);
  } else {
    appScreen.appendChild(appTemplates[num]);
  }
}
;

const changeScreen = (e) =
>
{
  if (!e.altKey) {
    return;
  } else {
    if (e.keyCode === KeyCode.ARROW__LEFT) {
      currentScreen--;
      showScreen(currentScreen);
    } else if (e.keyCode === KeyCode.ARROW__RIGHT) {
      currentScreen++;
      showScreen(currentScreen);
    }
  }
}
;


document.addEventListener(`keydown`, changeScreen);

showScreen(currentScreen);
