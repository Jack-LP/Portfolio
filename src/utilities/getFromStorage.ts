export const getFromStorage = (key) => {
  if (typeof window !== 'undefined') {
    return JSON.parse(window.localStorage.getItem(key));
  }
};
