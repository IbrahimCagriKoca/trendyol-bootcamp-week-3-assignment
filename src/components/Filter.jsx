import { useState } from "react";
import { useHistory } from "react-router";
import CharacterFilter from "./CharacterFilter";

const genders = ["female", "male", "genderless", "unknown"];
const species = ["human", "alien", "humanoid", "poopybutthole", "mythological-creature", "animal", "robot", "disease", "unknown"];
const statuses = ["alive", "dead", "unknown"];

const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const Filter = ({setApiUrl}) => {  
    const [filters, setFilters] = useState({});
    const resetFilters = () => {
        setFilters({});
        setApiUrl("https://rickandmortyapi.com/api/character/");
    }

    const setName = (name) => {
        setFilters({...filters, name: name})
    }

    const setGender = (gender) => {
        setFilters({...filters, gender: gender})
    }

    const setStatus = (status) => {
        setFilters({...filters, status: status})
    }

    const setSpecies = (species) => {
        setFilters({...filters, species: species})
    }

    const createFilterUrl = () => {
        let queryString = Object.entries(filters).map(([key, value]) => ("" + key + '=' + value)).join('&');
        return "https://rickandmortyapi.com/api/character/?" + queryString;
    }

    const applyFilter = () => {
        setApiUrl(createFilterUrl());
    }

    return (
        <div className="filter-container">
            <input 
                id="filter-search-bar" type="search" 
                placeholder="Write your characters name" 
                className="filter-search-bar" 
                onChange={(e) => setName(e.target.value)}
                value={filters.name || ""}
            />
            <ul className="filter-titles">
                <li>
                    <h4>Gender</h4>
                    <ul className="sub-filters gender">
                        {genders.map((tag) => (
                            <li onClick={() => setGender(tag)}>
                                <input type="radio" name="gender" id={tag + "-gender"} value={tag} checked={filters.gender === tag} />
                                <label htmlFor={tag}>{capitalize(tag)}</label>
                            </li>)
                        )}
                    </ul>
                </li>
                <li>
                    <h4>Status</h4>
                    <ul className="sub-filters status">
                        {statuses.map((tag) => (
                            <li onClick={() => setStatus(tag)}>
                                <input type="radio" name="status" id={tag + "-status"} value={tag} checked={filters.status === tag}/>
                                <label htmlFor={tag}>{capitalize(tag)}</label>
                            </li>)
                        )} 
                    </ul>
                </li>
                <li>
                    <h4>Species</h4>
                    <ul className="sub-filters species">
                        {species.map((tag) => (
                            <li onClick={() => setSpecies(tag)}>
                                <input type="radio" name="species" id={tag + "-species"} value={tag} checked={filters.species === tag}/>
                                <label htmlFor={tag}>{capitalize(tag)}</label>
                            </li>)
                    )} 
                    </ul>
                </li>
            </ul>
            <button onClick={applyFilter}>Apply Filters</button>
            <button onClick={resetFilters}>Clear Filters</button>
        </div>
    )
}

export default Filter