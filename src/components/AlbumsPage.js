import React,{useEffect, useState} from "react";
import { Audio } from  'react-loader-spinner';



export default function AlbumsPage() {
    const [error] = useState(null);
    const [isLoaded, setisLoaded] = useState(false);
    const [items, setitems] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(res => res.json())
            .then(
                (result)=>{
                    setisLoaded(true);
                    setitems(result);
                })

    },[])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <Audio
            height="100"
            width="100"
            color='grey'
            ariaLabel='loading'
        />
    } else {
        return (
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {`${item.id} ==> ${item.title}`}
                    </li>
                ))}
            </ul>
        );
    }
}

