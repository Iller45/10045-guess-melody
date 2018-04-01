export const getElementFromTemplate = (htmlString)=> {
  const el = document.createElement(`div`);
  el.innerHTML = htmlString.trim();
  return el;
};
