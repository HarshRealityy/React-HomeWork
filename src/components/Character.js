import './Character.css'
function Character (props) {
    let {name, desc, picture} = props;
    return (
        <div>
            <h2 className={'target'}>{name}</h2>
            <p>{desc}</p>
            <img src={picture}/>
        </div>
    )
}
export default Character;