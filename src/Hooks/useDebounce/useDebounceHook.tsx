import React, { useEffect, useState } from 'react'
type debounceType ={
    value: string,
    time: number
}

const useDebounceHook = ({value, time}: debounceType) => {

    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, time);

        return () => {
            clearTimeout(handler)
        }

    }, [value, time]);
  return debouncedValue;
}

export default useDebounceHook
