import React from "react";

/**
 * @param {string} storageKey
 * @param {*} defaultValue
 * @returns [value, setValue] for storageKey
 */
const useLocalStorage = (storageKey, defaultValue) => {
  const [value, setValue] = React.useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? defaultValue
  );

  React.useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};

export default useLocalStorage;
