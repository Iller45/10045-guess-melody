(function () {

  const appScreen = document.getElementsByClassName(`main`)[0];
  const templatesHolder = document.getElementById(`templates`).content.children;
  const appTemplates = [];
  let currentScreen = 1;


  function changeScreeen(event) {
    console.log(event);
    if (event.altKey && event.keyCode === 37) {
      showScreen(currentScreen--);
    } else if (event.altKey && event.keyCode === 39) {
      showScreen(currentScreen++);
    }
    console.log(currentScreen);
  }

  document.addEventListener(`onkeydown`, changeScreeen);

  [].forEach.call(templatesHolder, function (element) {
    appTemplates.push(element);
  });

  function showScreen(num) {
    if (num > appTemplates.length) {
      currentScreen = 0;
      appScreen.appendChild(appTemplates[currentScreen]);
    } else if (num < 0) {
      currentScreen = appTemplates.length;
      appScreen.appendChild(appTemplates[currentScreen]);
    } else {
      appScreen.appendChild(appTemplates[num]);
    }
  }

  showScreen(currentScreen);

})();
