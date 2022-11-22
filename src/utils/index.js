export const getFromLocalStorage = (storageKey) =>
  JSON.parse(localStorage.getItem(storageKey));
