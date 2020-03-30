import React from 'react'
import Person from './Person';

const Persons = (props) => {
    
    const personsList = props.persons;

    return personsList.map((person, index) => {
        return <Person 
            key={person.id} 
            name={person.name} 
            age={person.age} 
            remove={ () => props.clicked(index)} 
            changed={ (event) => props.changed(event, person.id)}/>
        })

    // return (
    //     <div>{list}</div>
    // )
    
}

export default Persons;