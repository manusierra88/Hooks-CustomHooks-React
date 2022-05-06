import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {
    console.log('me renderizo siempre')
    return (
        <button className='btn btn-primary' 
        onClick={()=>{
            increment(5);
            //*si pasamos un argumento en esta fnc podemos recibirlo en el componente padre
        }}>
            Increment
        </button>
    )
}
)
//* debemos usar el useCallback para que mande la funcion de forma memorizada y no se renderize nuevamente
//* todo el componente dado que la funcion se reasignaria a nuevo espacio en memoria.