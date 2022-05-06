import React, { useContext } from 'react'
import { UserContext } from './UserContext'


export const HomeScreen = () => {
    const {user} = useContext(UserContext);

        
    return (
        <div className='container'>
            <h1>Home Screen</h1>
            <hr/>

            <p>{JSON.stringify(user)}</p>

            

            
        </div>
    )
}
