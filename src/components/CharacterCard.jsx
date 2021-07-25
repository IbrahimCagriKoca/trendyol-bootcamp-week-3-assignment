import { Link } from "react-router-dom";

const CharacterCard = ({character}) => {
    return (
        
        <div className="character-card">
            <Link className="router-link" to={`/characters/${character.id}`}>
            <img src={character.image} alt="character image" />
            <div>
                <h2>{character.name}</h2>
            
                <p>{character.status} - {character.species}</p>
                <p>Gender: <br /><strong>{character.gender}</strong></p>
                <p>Locaiton: <br /><strong>{character.location && character.location.name}</strong></p>
            </div>
            </Link>
        </div>
    )

}

export default CharacterCard;