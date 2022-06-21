import './Character.css'
function Character (props) {
    let {id, name, status, species,gender,image} = props;
    return (
        <div>
            <h1>{name}</h1>
            <h2>{id}</h2>
            <ul>
                <li>{status}</li>
                <li>{species}</li>
                <li>{gender}</li>
            </ul>

            <img src={image}/>

        </div>
    )
}
export default Character;