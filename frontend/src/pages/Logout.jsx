import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export const Logout = ({ sessionstore }) => {
    async function activate() {
        try {
            await axios.get("http://localhost:3001/Logout/")
            sessionstore.setLoggedIn(false)
        } catch (error) {
            console.log(error)

        }
    }
    useEffect(() => {
        activate()
    }, [{ sessionstore }])
    return (
        <>
            <h1>
                You Are Logged out
            </h1>
            <p>redirecting to login page...</p>
        </>
    )
}
