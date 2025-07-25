import { useEffect, useState } from "react";

export function useLocalStorage(key, initialData) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem(key));

    if (existingData) {
      setData(existingData);
    } else {
      localStorage.setItem(key, JSON.stringify(initialData));
    }
  }, []);

  //the newData is all about setting data
  const updateLocalStorage = (newData) => {

    // when the typeOf data is function we need to use the below method to store the data on local storage
    if(typeof newData === "function"){
        localStorage.setItem(key, JSON.stringify(newData(data)))
    }
    else {
        localStorage.setItem(key, JSON.stringify(newData));
    }
    setData(newData);
  };

  return [data, updateLocalStorage];
}
