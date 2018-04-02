export const getElementFromTemplate = (htmlString)=> {
  const el = document.createElement(`span`);
  el.innerHTML = htmlString.trim();
  return el;
};
