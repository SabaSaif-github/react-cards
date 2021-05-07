import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Details() {
    const [user, setUser] = useState([])
    const getId = localStorage.getItem('id')


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${getId}`)
            .then(
                res => {
                    console.log(res)
                    setUser(res.data)
                })
            .catch(err => {
                console.log(err)
            })
    }

    )
    return (
        <div className="m-3 col-md-4">
            <div className="card text-center">
                <div className="card-body text-dark">
                    <h4 className="card-text">Name: {user.name}</h4>
                    <p className="card-text">Username: {user.username}</p>
                    <p className="card-text">Email: {user.email}</p>
                    <p className="card-text">Phone: {user.phone}</p>
                    <p className="card-text">Website: {user.website}</p>
                </div>
            </div>
        </div>
    )
}

export default Details
