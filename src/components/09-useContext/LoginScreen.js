import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const { setUser } = useContext(UserContext)
    const user = {
        id: 12345,
        name: 'Manuel'
    }
    return (
        <>
            <h1>Login Screen</h1>
            <hr />
            <button
                className='btn btn-outline-success'
                onClick={()=>{setUser(user)}}
                
            >setUser</button>
        </>
    )
}
