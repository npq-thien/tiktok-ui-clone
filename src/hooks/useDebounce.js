import { clear } from "@testing-library/user-event/dist/clear";
import { useState, useEffect } from "react";

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => setDebounceValue(value), 500)

        return () => clearTimeout(handler)
    }, [value])

    return debounceValue;
}

export default useDebounce;