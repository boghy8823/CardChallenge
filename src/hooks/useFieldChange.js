/* eslint-disable no-debugger */
import { useState, useCallback,  } from "react";
import validateCardDetails from "../helpers/validation";

const useFieldChange = (initialState) => {
  const [value, setValue] = useState(initialState);
 
  const setEventValue = useCallback(
    (e) => {
      const error = validateCardDetails(e.target.name, e.target.value);
      setValue({ value: e.target.value, modified: true });
      if (error) {
        setValue({ value: e.target.value, error: error, modified: true });
      }
    },
    [setValue]
  );
  
  const resetField = (newValue = "") => {
    setValue(newValue);
  };

  return [value, setEventValue, resetField];
};

export default useFieldChange;
