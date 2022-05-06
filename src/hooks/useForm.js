import { useState } from "react"


export const useForm = (initialState = {})=> {

    const [values, setValue] = useState(initialState);

    const reset = ()=>{
        setValue(initialState);
    }


    const handleInputchange = ({target})=>{
        

        setValue({
            ...values,
            [target.name] : target.value
        });
    }

    return [values, handleInputchange, reset] //esta funcion que es un custom hook retorna los valores de los 
    //campos del formulario y la funcion que actualiza el estado cuando estos cambian
    //se puede definir dicha funcion en el 2do argumento pero queda poco entendible 



}