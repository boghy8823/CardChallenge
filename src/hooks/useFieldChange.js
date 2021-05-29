/* eslint-disable no-debugger */
import { useState, useCallback } from "react";
import validateCardDetails from "../helpers/validation";

const useFieldChange = (initialState) => {
  const [value, setValue] = useState(initialState);

  const setEventValue = useCallback(
    (e) => {
      setValue({ value: e.target.value });
      const error = validateCardDetails(e.target.name, e.target.value);
      if (error) {
        setValue({ value: e.target.value, error: error });
      }
    },
    [setValue]
  );

  return [value, setEventValue];
};

export default useFieldChange;
