import React, { useEffect } from "react";
import jwt from 'jsonwebtoken'
import { useHistory } from 'react-router-dom'

const Home = () => {
    const history = useHistory()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            const user = jwt.decode(token)
            if(!user){
                localStorage.removeItem('token')
                window.location.href = '/'
            }
            console.log(user)
        }
    }, [])
    return <h1>Hello, </h1>
}

export default Home