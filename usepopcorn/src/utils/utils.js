export const debounce = (func, delay = 1000) => {
  let timeoutId;
  if (timeoutId) {
    clearTimeout();
  }
  return function (...args) {
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
