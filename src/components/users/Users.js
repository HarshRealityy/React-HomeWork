import React, {useEffect, useState} from 'react';
import {User} from "../user/User";

function Users() {

    const [users, setUsers] = useState([])


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(value => setUsers(value))
    },[]);
    return (
        <div>
            {
                users.map(user => <User key={user.id} item={user}/>)
            }
            <hr/>
        </div>

    );
};

export {Users};