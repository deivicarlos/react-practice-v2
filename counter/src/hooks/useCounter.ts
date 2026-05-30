import { useState } from "react";

const useCounter = (initial = 0, step = 1) => {
    const [value, setValue] = useState(initial);

    return {
        value,
        increment: () => setValue(prev => prev + step),
        decrement: () => setValue(prev => prev - step),
        reset: () => setValue(initial),
    }
}

export default useCounter;