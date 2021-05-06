import React, { useState, useEffect} from 'react'
import axios from 'axios'
import './card-style.css';
import Avatar from 'react-avatar';

function DataFetching() {
    const [users, setUsers] = useState([])

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(
            res => {
                console.log(res)
                setUsers(res.data)
            })
            .catch(err =>{
                console.log(err) 
            })
    }

    )
    return (
        <div>
            <ul>
                {users.map(user =>(
                    <div>
                        <div className="card text-center">
                            <div className="overflow">
                                <Avatar name={user.name} maxInitials={1}/>
                            </div>
                        <div className="card-body text-dark">
                            <h4 className="card-title">{user.name}</h4>
                            <p className="card-text text-secondary">{user.username}</p>
                            <a href="#">{user.email}</a>
                            <br></br>
                            <a href="#" className="btn btn-primary">MORE DETAILS</a>
                        </div>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default DataFetching
