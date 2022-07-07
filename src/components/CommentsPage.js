import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";


export default function CommentsPage() {


    const [items, setItem] = useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setItem([...value]);
            });

    }, [])

    return (<ul>
            {
                items.map(item => {
                    return (<li key={item.id}>
                        <Link to={item.id.toString()}>
                           {`${item.id} ==> ${item.name}`}
                        </Link>
                    </li>)
                })
            }

        </ul>
    )
}
