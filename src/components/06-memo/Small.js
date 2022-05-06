import React from 'react'

export const Small = React.memo(({value}) => {
    console.log('me renderizo de nuevo!');
    return (
        <small>
            {value}
        </small>
    )
}
)

//* Al llamar el memo o React.memo hacemo que react memorize el componente y por ende cada vez
//*que haya un cambio de estado no se va a redibujar el componente, salvo que se modifiquen las 
//* las props del mismo

