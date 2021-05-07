import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './card-style.css';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom'

function DataFetching() {
    const [users, setUsers] = useState([])
    const setId = (idOfUser) => {
        localStorage.setItem('id', idOfUser)
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(
                res => {
                    console.log(res)
                    setUsers(res.data)
                })
            .catch(err => {
                console.log(err)
            })
    }

    )
    return (

        <div className="container fluid d-flex justify-content-center">
            <div className="row">
                {users.map(user => (
                    <div className="mt-3 mb-3 col-md-4">
                        <div className="card text-center">
                            <div className="overflow">
                                <Avatar name={user.name} maxInitials={1} />
                            </div>
                            <div className="card-body text-dark">
                                <h4 className="card-title">{user.name}</h4>
                                <p className="card-text text-secondary">@{user.username}</p>
                                <a href={user.website}>{user.website}</a>
                                <br></br>
                                <Link to='/details' ><p className="btn btn-primary" onClick={() => setId(user.id)}>MORE DETAILS</p></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default DataFetching
