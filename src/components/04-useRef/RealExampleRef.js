import React, { useState } from 'react'

import { MultpleHooks } from '../03-examples/MultpleHooks';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false)
    return (
        <div>RealExampleRef

            <hr/>

            { show && <MultpleHooks />}

            <button className='btn btn-outline-success' 
                    onClick={()=>{
                        setShow(!show);
                    }}>
            Show/Hide</button>
        
        </div>

    )
}

//! Este metodo de usar el useRef no se recomienda que se siga implementando
//todo buscar la nueva forma de ver el abortControll
