import { useHistory, useParams } from "react-router";
import { useEffect, useState } from 'react';
import Header from "./Header";

const CharacterPage = () => {
    const history = useHistory();
const backToHome = () => {
    history.push("/")
}

    let {id} = useParams();
const fetchCharacter = (callback, url) => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if (data) {
                callback(data);
            }
        }); 
  }

  const [apiUrl, setApiUrl] = useState("https://rickandmortyapi.com/api/character/" + id);  
  const [character, setCharacter] = useState({});
  const [episodes, setEpisodes] = useState([]);
  
    useEffect(() => {
        fetchCharacter((character) => {
            setCharacter(character);
        }, apiUrl)
    }, [apiUrl]);

    useEffect (() => {
        if (character.episode) {
            let episodeNumbers = character.episode.slice(Math.max(character.episode.length - 5, 0))
                                                  .map(link => link.split('/').pop());
            fetch("https://rickandmortyapi.com/api/episode/" + episodeNumbers.toString())
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    Array.isArray(data) ? setEpisodes(data) : setEpisodes([data])
                }
            }); 
        }
    }, [character])
    return (
         <div className="character-page-container">
             <Header/>
             <div className="character-page-details">
                <img src={character.image} alt="character image" />
                <div>
                    <h2>{character.name}</h2><hr />
                    <p>{character.status} - {character.species}</p><hr />
                    <p>Origin Location: <strong> {character.origin && character.origin.name}</strong></p><hr />
                    <p>Current Location: <strong>{character.location && character.location.name}</strong></p><hr />
                    <p>Last episodes: {episodes.map(episode => <p><strong>{episode.name}</strong></p> )}</p>
                    <button onClick={backToHome} >Go Back</button>
                </div>
             </div>
         </div>
    )
}

export default CharacterPage