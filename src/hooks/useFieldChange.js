/* eslint-disable no-debugger */
import { useState, useCallback, useEffect } from "react";
import validateCardDetails from "../helpers/validation";

const useFieldChange = (initialState) => {
  const [value, setValue] = useState(initialState);
  
  useEffect(() => setValue(initialState), [initialState]);

  const setEventValue = useCallback(
    (e) => {
      const error = validateCardDetails(e.target.name, e.target.value);
      setValue({ value: e.target.value, modified: true, error: null });
      if (error) {
        setValue({ value: e.target.value, error: error,  modified: true });
      }
    },
    [setValue]
  );

  return [value, setEventValue];
};

export default useFieldChange;
