import React from 'react'
import Person from './Person';

const Persons = (props) => {
    
    const personsList = props.persons;

    let list = personsList.map((person, index) => <Person 
            key={person.id} 
            name={person.name} 
            age={person.age} 
            remove={ () => props.clicked(index)} 
            changed={ (event) => props.textChangeHandler(event, person.id)}/>
    )

    return (
        <div>{list}</div>
    )
    
}

export default Persons;