import { useCallback, useState } from "react";
//import _ from "loadash";
var _ = require("lodash");

const useDebouncer = (obj = null, wait = 500) => {
  const [state, setState] = useState(obj);
  const debounce = useCallback(
    _.debounce((_prop) => {
      console.log("debouncing!");
      setState(_prop);
    }, wait),
    []
  );
  const setDebouncedState = (_val) => {
    debounce(_val);
  };
  return [state, setDebouncedState];
};
export default useDebouncer;
