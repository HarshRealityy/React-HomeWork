const User = ({item}) => {
    return (
        <div>
            <h2>{item.id}</h2>
            <h2>{item.name}</h2>
        </div>
    );
};

export {User};