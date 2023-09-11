import { SEARCH_DEBOUNCE_TIME } from "@/constants/api";
import { useEffect, useState } from "react";

export default function useDebounce<T>(
  value: T,
  delay: number = SEARCH_DEBOUNCE_TIME,
) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
