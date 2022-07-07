import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";


export default function CommentPage() {


    const {comment_id} = useParams()


    const [items, setItems] = useState()
    const [error, setError] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${comment_id}`)
            .then(value => value.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )    }, []);

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>загрузка</div>
    } else {
        return (
            <ul>
                    <li>
                        {items.id}{'   '} =={'>'} {'   '}
                        {items.title}
                    </li>

            </ul>
        );
    }
};

