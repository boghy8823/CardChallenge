import { useState, useCallback } from "react";

const useFieldChange = (initialState) => {
  const [value, setValue] = useState(initialState);

  const setEventValue = useCallback(
    (value) => {
      setValue(value);
    },
    [setValue]
  );

  return [value, setEventValue];
};

export default useFieldChange;
