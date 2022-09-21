const savePrevQueries = (key: string, value: string) => {
  const localStorageItems = JSON.parse(localStorage.getItem(key)!);

  if (!localStorageItems) {
    localStorage.setItem(key, JSON.stringify([value]));
  } else {
    if (localStorageItems.length > 4) {
       localStorageItems.length = 4;
    }
    if (!localStorageItems.includes(value)) {
      localStorageItems.unshift(value);
    }
     localStorage.setItem(key, JSON.stringify(localStorageItems));
  }
}

export default savePrevQueries;