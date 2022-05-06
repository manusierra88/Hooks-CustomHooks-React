import { useState } from "react"


export const useCounter = (inintialState = 10)=>{

    const [counter, setCounter] = useState(inintialState);

    const increment = ()=>{

        setCounter( counter +1)
    };

    const decrement = ()=>{

        setCounter( counter -1)
    };

    const reset = ()=>{

        setCounter( inintialState)
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }


}