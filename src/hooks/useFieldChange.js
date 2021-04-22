import { useState, useCallback } from "react";

const useFieldChange = (initialState) => {
  const [value, setValue] = useState(initialState);

  const setEventValue = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  return [value, setEventValue];
};

export default useFieldChange;
