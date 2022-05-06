import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import{ useCounter} from '../../hooks/useCounter';
import  '../02-useEffect/effect.css'

export const MultpleHooks = () => {
    const {counter, increment} = useCounter(1)
    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`
    const {loading, data} =  useFetch(url);
    const {author, quote}= !!data && data[0]; //* si la data no viene manda false usando el !! si viene manda la data de la posicion [0]

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            {
                loading
                ? 
                    (
                        <div className='alert alert-info text-cener'>Loading..</div>
                    )
                :
                    (    
                        <blockquote className='blockquote text-right'>
                            <p className='mb-2'> {quote} </p>
                            <footer className='blockquote-footer mt-1'> {author}</footer>
                            <hr/>
                            <button onClick={increment} className='btn btn-primary'>Change Quote</button>
                        
                        </blockquote>
                        
                    )

            }


        </>
    )
}
